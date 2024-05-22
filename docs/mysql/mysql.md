# MySQL

## MySQL基础知识
1. 事务并发执行遇到的问题
- 脏写
  如果**一个事务修改了另外一个未提交事务修改过的数据**

  | 时间序号 |                 Session A                 |                 Session B                 |
  | :------: | :---------------------------------------: | :---------------------------------------: |
  |    ①     |                  BEGIN;                   |                                           |
  |    ②     |                                           |                  BEGIN;                   |
  |    ③     |                                           | update table set name='张三' where id = 1 |
  |    ④     | update table set name='李四' where id = 1 |                                           |
  |    ⑤     |                                           |                 ROLLBACK;                 |
  |    ⑥     |                  COMMIT;                  |                                           |
  
  ***Session B***中的事务进行回滚后，***Session A***的更新不存在，这种现象就是**脏写**
  
- 脏读

  如果**一个事务读到了列外一个未提交事务修改的数据**

  | 时间序号 |                          Session A                           |                 Session B                 |
  | :------: | :----------------------------------------------------------: | :---------------------------------------: |
  |    ①     |                            BEGIN;                            |                  BEGIN;                   |
  |    ②     |                                                              | update table set name='张三' where id = 1 |
  |    ③     | select name from table where id = 1<br />（读到的name是“张三“,发生了脏读） |                                           |
  |    ④     |                                                              |                                           |
  |    ⑤     |                           COMMIT;                            |                                           |
  |    ⑥     |                                                              |                 ROLLBACK;                 |

  

- 不可重复读

  如果**一个事务只能读到列外一个已经提交的事务修改过的数据，并且其他事务每对该数据进行修改并提交后，该事务都能查询到最新值**

  | 时间序号 |                          Session A                           |                 Session B                  |
  | :------: | :----------------------------------------------------------: | :----------------------------------------: |
  |    ①     |                            BEGIN;                            |                                            |
  |    ②     | select name from table where id = 1;<br />(此时读到name是“李二”) |                                            |
  |    ③     |                                                              | update table set name='张三' where id = 1; |
  |    ④     | select name from table where id = 1;<br />(此时读到name是“张三”) |                                            |
  |    ⑤     |                                                              | update table set name='李四' where id = 1; |
  |    ⑥     | select name from table where id = 1;<br />(此时读到name是“李四”) |                                            |

- 幻读

  如果**一个事务先根据某些条件查询出一些记录，之后另一个事务又向表中插入了符合这些条件的记录，原先 的事务再次按照该条件查询时，能把另一个事务插入的记录也读出来**

  | 时间序号 |                          Session A                           |             Session B              |
  | :------: | :----------------------------------------------------------: | :--------------------------------: |
  |    ①     |                            BEGIN;                            |                                    |
  |    ②     | select name from table where id > 0;<br /> (此时读到name是“李二”) |                                    |
  |    ③     |                                                              | insert into table values(2,'张三') |
  |    ④     | select name from table where id > 0;<br /> (此时读到name是“李二”,“张三”) |                                    |
2. 事务隔离级别

| 隔离级别 | 脏读 | 不可重复读 | 幻读 |
| :-----: | :----: | :-----: | :----: |
|read uncommited（未提交读）|&#x2714;|&#x2714;|&#x2714;|
|read commited（已提交读）|&#x2716;|&#x2714;|&#x2714;|
|repeatable read（可重复读）| &#x2716;|&#x2716;|&#x2714;|
|serializable（可串行化）|&#x2716;|&#x2716;|&#x2716;|
## MySQL索引
## MySQL锁
## MySQL优化