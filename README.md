  ## TASKS ##
### Dat
  * Database Schema Design 
### Minh: 
  * Group website (DONE)
  * Event website 
### Quang: 
  * Login/out procedure (DONE)
  * Implement database connection and guideline (DONE)
  * Using database to populate profile page 
### Quan: 
  * Add Event and Group preview in index.html (In progress)


## Database Connection ##


```
// install and start mysql in terminal
npm install mysql2
service mysql start
mysql
```

```
//inside mysql
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
GRANT ALL PRIVILEGES ON wdc.* TO 'myuser'@'localhost';
FLUSH PRIVILEGES;
quit
```

```
//example
CREATE USER 'quang'@'localhost' IDENTIFIED BY 'quang2003';
GRANT ALL PRIVILEGES ON wdc.* TO 'quang'@'localhost';
```

```
//load database in terminal
mysql < db.sql
```

```
//change corresponding user and password in index.js before npm start
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'mypassword',
  database: 'wdc'
});
```
