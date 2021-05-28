import mysql from 'mysql'


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "book_db"
});



export default connection