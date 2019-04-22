var basex = require('node-basex');
var client = new basex.Session("localhost", 1984, "admin", "admin");

// var client = new basex.Client({
//   host: 'localhost',
//   port: 3001,
//   path: '/rest/mydatabase'
// });

class Backend{
  async helloworld(req, res){
    console.log(client.query('for $i in 10 return $i'))
  }
}

export default new Backend()


// /*
//  * This example shows how database commands can be executed.
//  */
// var basex  = require("basex");
// var client = new basex.Session("localhost", 1984, "admin", "admin");
// basex.debug_mode = false;
// /**
//  * Description
//  * @method print
//  * @param {} err
//  * @param {} reply
//  * @return 
//  */
// function print(err, reply) {
// 	if (err) {
// 		console.log("Error: " + err);
// 	} else {
// 		var t2=new Date();
// 		console.log("Execution completed in ",t2-t0," milliseconds.");
// 		console.dir(reply);
// 	}
// }; 
// var t0=new Date();
// let result = client.execute("xquery for $i in 5 return $i",print);
// client.execute("create db test_db", print);

// // add document
// client.add("/world/World.xml", "<x>Hello World!</x>", print);

// // add document
// client.add("Universe.xml", "<x>Hello Universe!</x>", print);

// // run query on database
// client.execute("xquery /", print);

// // drop database
// client.execute("drop db test_db", print);


// client.close(function(){
// 	var t2=new Date();
// 	console.log("Closed in ",t2-t0," milliseconds.");	
// });
// var t1=new Date();
// // not a true time because basex commands not yet done.
// console.log("Commands send in ",t1-t0," milliseconds.");

// // var xq="db:system()";
// // client.execute("xquery declare option output:method 'jsonml';"+xq,print);
// // client.close();