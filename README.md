## Web Project CS2207 ##

<hr>

### Dat: Event website (Minh)
### Minh: Group website (DONE)
### Quang: Login pop-up (DONE)
### Quan: Add Event and Group preview in index.html (In progress)

<hr>

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