  ## TASKS ##
### Dat
  * Database Schema Design (DONE)
  * INSERT data for Clubs table
  * Profile Page Fullstack 
  * Event + Club join function
  
### Minh: 
  * Group website (DONE)
  * Event website (DONE)
  * Fix Index.html 
  * Event + Club Profile
  
### Quang: 
  * Login/out procedure (DONE)
  * Implement database connection and guideline (DONE)
  * INSERT users from login to database
  * FIX google login
  * 
### Quan: 
  * Add Event and Group preview in index.html (Done)
  * INSERT data for Events table
  * Front End for Update
  * Back to HOME in login 


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
