const express = require('express')
require('dotenv').config();
const mysql = require('mysql2');


const app = express()
 


//Directorio Público
app.use( express.static('public'));


app.listen(process.env.PORT, () => {
  console.log(`Servidor funcionando!! :: PUERTO ==> ${process.env.PORT}`);
})



// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb'
});


connection.connect((err) => {
	if (err) {
		console.error('error connecting mysql: ', err);
	} else {
		console.log('mysql connection successful');
		
	}
});


// connection.query(
// 	'SELECT * FROM `usuarios`',
// 	(err, results, fields) => {
// 	  console.log(results); // results contains rows returned by server
// 	//   console.log(fields); // fields contains extra meta data about results, if available
// 	}
//   );