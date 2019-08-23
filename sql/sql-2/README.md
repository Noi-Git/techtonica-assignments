## SQL 2 (Multiple table operations)

**2. Enter the SQLite command line program using the terminal commad sqlite3 twitter.sqlite3. (This will save your database to a file called twitter.sqlite3). Once there, use SQL statements to create two tables according to the spec for the two tables in step 1.**

Nois-MacBook-Pro:~ Noi$ sqlite3 twitter.sqlte3


**3. Once you have your two tables set up, compare your table set-up with another apprentice’s.**

sqlite> CREATE TABLE IF NOT EXISTS "User" (id int, name text, email text);

sqlite> CREATE TABLE IF NOT EXISTS "posts" (post_id, post_name, post_details);


**4. Add sample data to the tables yourself (make up some users and posts).**

sqlite> INSERT INTO "User" (id, name, email) values (1, "John", “john@gmail.com");

sqlite> INSERT INTO "User" (id, name, email) values (2, "Mary", “mary@yahoo.com");


**Add sample data to the tables yourself (make up some users and posts).**

sqlite> INSERT INTO "posts" (post_id, post_name, post_details) values (1, "today is Thursday", "Happy Thursday");

sqlite> INSERT INTO "posts" (post_id, post_name, post_details) values (2, "Postman's sock", "Get a nice pair of socks”);


**5. Try writing queries that get data such as:**

1|John|john@gmail.com|1|today is Thursday|Happy Thursday|

2|Mary|mary@yahoo.com|2|Postman's sock|Get a nice pair of socks|

3|Jenny|jenny@gmail.com|3|food|We have an amazing dinner|


**All the tweets by a given user**

sqlite> SELECT post_details FROM posts WHERE id = 1;

Happy Thursday

It is a little hot


**The 10 most recent tweets by any user sqlite> SELECT post_name FROM posts LIMIT 3;**

today is Thursday

Postman's sock

food


sqlite> SELECT post_name FROM posts DESC LIMIT 3;

today is Thursday

Postman's sock

food


** a database spec**

![SQLite Database for Browser](https://github.com/Noi-Git/techtonica-assignments/blob/master/images/sql_2.png)