# MySQL 分页数据重复

## 问题描述

写分页查询接口，**order by 和 limit 混用的时候，出现了排序的混乱情况** 在进行第 二 页查询时，出现与第一页的数据一样的记录。

## 问题

在MySQL中分页查，我们通常使用limit。例如第一页的20条数据limit(0,20),第二页的20条数据limit(20,20)。业务上我们通常也会在分页是时候加上排序 order by；
但是当limit和order by一起使用的时候，有可能出现第N页的数据，竟然和前面页码的数据有重复。
例如：
> select a,b from table where c = 1 order by d desc limit 0,20

使用上述 SQL 查询的时候，很有可能和 LIMIT 20,20 查出相同的某条数据。为了解决这个问题，我们在 ORDER BY 后面加上了 ID（唯一索引）排序来进行规避。
例如：

> select a,b from table where c = 1 order by d desc,id desc limit 0,20

理论上，MySQL的排序默认以主键ID作为排序条件，也就是说如果条件d相等的情况下，主键 id 会作为默认的排序条件，不需要我们多此一举加 ID asc。**但是事实就是，MySQL 在 order by 和 limit 同时使用的情况下，出现了排序的混乱情况**。

## 分析

在 MySQL 5.6 的版本上，**优化器在遇到 order by+limit 语句的时候，做了一个优化，使用了 priority queue**。参考伪代码：

```
while (get_next_sortkey()){
   if (using priority queue)
     push sort key into queue
   else{
     if (no free space in sort_keys buffers){
       sort sort_keys buffer;
       dump sorted sequence to 'tempfile';
       dump BUFFPEK describing sequence location into 'buffpek_pointers';
     }
     put sort key into 'sort_keys';
  }
}
if (sort_keys has some elements && dumped at least once)
	sort-dump-dump as above;
else
	don't sort, leave sort_keys array to be sorted by caller.
```

使用 priority queue的目的，就是在不能使用索引有序性的时候，如果需要排序，并且使用了limit n，那么只需要在排序过程中，保留n条记录即可，这样虽然不能解决所有记录都需要排序的开销，但是只需要 sort buffer 少量的内存就可以完成排序。

之所以5.6出现了第二页数据重复的问题，是因为 priority queue 使用了堆排序的排序方法，而堆排序是一个不稳定的排序方法，也就是相同的值可能排序出来的结果和读出来的数据顺序不一致。

## 解决方法

### 1. 尽量使用不重复的值进行排序

如果在字段添加上索引，就直接按照索引的有序性进行读取并分页。

可以最后加上 ID 排序，也不会影响业务

### 2. 正确理解分页

分页是建立在排序的基础上，进行了数量范围分割。排序是数据库提供的功能，而分页却是衍生出来的应用需求。 在 MySQL 和 Oracle 的官方文档中提供了 limit n 和 rownum < n 的方法，但却没有明确的定义分页这个概念。 还有重要的一点，虽然上面的解决方法可以缓解用户的这个问题，但按照用户的理解，依然还有问题：比如，这个表插入比较频繁，用户查询的时候，在 read-committed 的隔离级别下，第一页和第二页仍然会有重合，这个可以使用 ID 来规避。 所以，分页一直都有这个问题，不同场景对数据分页都没有非常高的准确性要求。

### 3. 一些常见的数据库排序问题

- **深分页问题**

有些时候，我们需要偏移一定量数据之后，获取某些数据，就很容易想到用 limit，但是，如果偏移量很大时，就会发现 SQL 执行起来非常非常慢了，因为，偏移量会分页读取到 buffpool 中，数据量大，占用的 buffpool 空间就会大，而这个空间大小是配置的，一般不会很大；

其次需要从一开始就扫描数据，最后要舍弃前面大量数据，只保留需要的那几条数据，而且过程还有可能需要回表操作，导致了慢 sql。

对于这个问题的优化，建议写一个过滤条件（比如：自增主键 ID 或有序的字段），再与 limit 结合实现。





