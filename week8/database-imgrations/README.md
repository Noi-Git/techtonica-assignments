# Database Migrations

1. Create table with at least four columns.

```
Nois-MacBook-Pro:~ Noi$ sqlite3 mealsPerDay.sqlite3
SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.

CREATE TABLE meals_per_day(
  id varchar(5), 
  name text, 
  have_breakfast boolean, 
  have_lunch boolean, 
  have_dinner boolean, 
  note text);
```

2. Insert data into table

```
INSERT INTO meals_per_day 
VALUES(1, "noi", TRUE, TRUE, FALSE, "try to loose weight");

INSERT INTO meals_per_day 
VALUES(1, "elephant", TRUE, FALSE, FALSE, "don't feel like eating");

```

result

![Data Migration](https://github.com/Noi-Git/techtonica-assignments/blob/master/images/data-migration.png)

3. Add date columns to the database

```
ALTER TABLE meals_per_day 
ADD COLUMN date DATETIME default NOW();

SELECT * FROM meals_per_day;

1|noi|true|true|false|try to loose weight|unknow
```

4. Change data type

```
ALTER TABLE meals_per_day 
MODIFY COLUMN name varchar(50);

SELECT * FROM meals_per_day;

1|noi|true|true|false|try to loose weight|unknow
1|elephant|true|false|false|don't feel like eating|8-26-19
```
