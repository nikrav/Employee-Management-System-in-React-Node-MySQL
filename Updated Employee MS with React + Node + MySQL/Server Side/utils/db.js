import mysql from 'mysql'

const con = mysql.createConnection({
    host: "database-1.c50ee2aam39b.eu-north-1.rds.amazonaws.com",
    user: "root",
    password: "Vkvrrn123",
    database: "employeems"
})

con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default con;

