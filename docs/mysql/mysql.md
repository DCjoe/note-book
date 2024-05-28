# MySQL

## MySQL基础知识
### 1. 事务并发执行遇到的问题
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
### 2. 事务隔离级别

| 隔离级别 | 脏读 | 不可重复读 | 幻读 |
| :-----: | :----: | :-----: | :----: |
|read uncommited（未提交读）|&#x2714;|&#x2714;|&#x2714;|
|read commited（已提交读）|&#x2716;|&#x2714;|&#x2714;|
|repeatable read（可重复读）| &#x2716;|&#x2716;|&#x2714;|
|serializable（可串行化）|&#x2716;|&#x2716;|&#x2716;|
### 3. MVCC原理
- 版本链
InnoDB存储引擎表来说，聚簇索引记录会包含隐藏列：
> - row_id 非必要的，如果存在主键或者非null的UNIQUE键，就不包含row_id
> - trx_id 事务ID 每次修改时把当前事务ID赋值给trx_id
> - roll_pointer 旧版本指针 每次对数据修改时，会把旧版本记录到undo日志

- ReadView
  对于read uncommited隔离级别来说，可以读取未提交事务数据，所以只要读取最新版本数据。对于serializable隔离级别来说，用加锁来访问。对于read commited和repeatable read隔离级别来说**需要判断哪个版本数据是当前事务可见**。
  
  ReadView内容：
  > - m_ids：表示生成ReadView时当前系统中活跃的读写事务ID列表
  > - min_trx_id：表示在生成ReadView时系统中活跃的读写事务中最小的事务ID，及m_ids最小值
  > - max_trx_id：生成ReadView时系统要分配给下一个事务的ID
  > - create_trx_id：生成该ReadView的事务ID
  
  判断某个版本记录是否可见步骤：
  > - 如果被访问版本的trx_id和create_tex_id**相同**，意味当前事务访问它自己修改过的记录，所以该版本能被当前事务访问。
  > - 如果被访问版本trx_id**小于**ReadView的min_trx_id,表示该版本事务在生成ReadView时已经提交了，所以该版本能被当前事务访问。
  > - 如果被访问版本trx_id**大于**ReadView的max_trx_id,表示该版本事务在生成ReadView后开启的，所以该版本不能被当前事务访问。
  > - 如果被访问版本trx_id在ReadView的min_trx_id和max_trx_id之间，需要判断trx_id是否在m_ids列表中，如果在，说明在创建ReadView时该版本事务还在活跃中，该版本不能被当前事务访问；如果不在，说明在创建ReadView时该版本事务已经提交，该版本能被当前事务访问。
  
  read commited和repeatable read隔离级有一个非常大的区别
> read commited 每次读取数据前都生成一个ReadView
> repeatable read 第一次读取数据时生成ReadView

## MySQL索引
### InnoDB记录结构
InnoDB记录以page页进行存储，一页16kB大小，结构如下图所示：

![InnoDB数据页结构](.\assets\InnoDB数据页结构.png)
#### File Header
|               名称               | 占用空间 |                            描述                             |
| :------------------------------: | :------: | :---------------------------------------------------------: |
|     FIL_PAGE_SPACE_OR_CHKSUM     |  4字节   |                         页的校验和                          |
|         FIL_PAGE_OFFSET          |  4字节   |                            页号                             |
|          FIL_PAGE_PREV           |  4字节   |                        上一页的页号                         |
|          FIL_PAGE_NEXT           |  4字节   |                        下一页的页号                         |
|           FIL_PAGE_LSN           |  8字节   |              页面被最后修改时对应的日志列位置               |
|          FIL_PAGE_TYPE           |  2字节   |                           页类型                            |
|     FIL_PAGE_FILE_FLUSH_LSN      |  8字节   | 仅在系统表空间的一个页定义，代表文件至少被刷新到对应的LSN值 |
| FIL_PAGE_ARCH_LOG_NO_OR_SPACE_ID |  4字节   |                        页所属表空间                         |



## MySQL锁

## MySQL优化