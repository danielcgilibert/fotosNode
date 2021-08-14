const mysql = require('mysql2/promise');

// create the connection to database
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'mydb'
  });
  
  
  // connection.connect((err) => {
	//   if (err) {
	// 	  console.error('error connecting mysql: ', err);
	//   } else {
	// 	  console.log('mysql connection successful');
		  
	//   }
  // });
  

  module.exports =  connection;