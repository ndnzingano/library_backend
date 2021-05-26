import mysql from 'mysql'


const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "user_crud"
});

export default connexion