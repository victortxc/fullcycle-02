const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people(name) values('Victor')`
connection.query(sql)
connection.end()



app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    connection.query("SELECT name FROM people", function (error, data) {
        if (error) throw error
        let names=[]
        data.forEach(element => {
            names.push(element.name)
        });
        res.send(`<div><h1>Full Cycle Rocks!</h1>${names}</div>`)
      });

    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
