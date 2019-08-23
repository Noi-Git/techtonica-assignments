## SQL 1 (Single table operations)

**1. Work through the Codecademy SQL Tutorial Section 1 (Manipulation)**
**2. SQLite is a version of SQL that comes installed on mac! Try it out: In Terminal, type sqlite3 food.sqlite3 to use SQLite. This command will open sqlite and save your database to a file named food.sqlite3. Try adding a table with the command CREATE TABLE food (name TEXT, calories INTEGER);**

Nois-MacBook-Pro:~ Noi$ sqlite3 food2.sqlite3;
SQLite version 3.24.0 2018-06-04 14:10:15
Enter ".help" for usage hints.
sqlite> .tables
food

**See that the table was created by typing .tables to see the list of all existing tables.**
sqlite> .tables
food

**Try adding some data:**
INSERT INTO food VALUES ("pizza", 500);

sqlite> INSERT INTO food VALUES ("burito", 500, "breakfast");

See the data: SELECT * from food;

sqlite> SELECT * FROM food;
pizza|600|dinner
ice-cream|700|snack
cucumber salad|100|dinner
green curry|800|dinner
rice|200|dinner
burito|500|breakfast

**SQLite Database for Browser**

https://github.com/Noi-Git/techtonica-assignments/blob/master/images/sqlite-de-browser.png

 **Work through the Codecademy SQL Tutorials**

https://github.com/Noi-Git/techtonica-assignments/blob/master/images/codecademy_part_1-3.png
