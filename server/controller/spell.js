const basex = require("basex");
const server = new basex.Session("localhost", 1984, "admin", "admin");

// var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
//   return new (P || (P = Promise))(function (resolve, reject) {
//       function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
//       function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
//       function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
//       step((generator = generator.apply(thisArg, _arguments || [])).next());
//   });
// };

class SpellController {
  async findSpell(req, res) {
    console.log("Beginning of excecution");
    let query = server.query(
      "for $i in (1 to 10)\
    return\
      <value>{$i}</value>",
      event => {
        console.log(event);
      }
    );
    // query.execute((e,r)=>{res.send(query.results +" "+ e + " " + r)})
    // res.send(query.results)
    // console.log(query.result)
    // res.send(JSON.stringify(result))
    console.log("Ending of excecution");
  }

  async findSpellByName(req, res) {
    console.log("Reached");
    let queryText = 'for $x in doc("' + req + '")return $x';
    console.log("Finished");
    // res.send(server.query(queryText))
    res.send(
      "<div id='mw-content-text' lang='en' dir='ltr' class='mw-content-ltr mw-content-text'><table class='article-table'><caption><i>1st-level abjuration</i></caption> <tbody><tr> <th>Casting Time </th><td>1 minute (Ritual) </td></tr> <tr> <th>Range </th><td>30 feet </td></tr> <tr> <th>Components </th><td>V S M (Tiny bell, fine silver wire) </td></tr> <tr> <th>Duration </th><td>8 hours </td></tr></tbody></table> <p>Choose an area that is no larger than a 20-foot <a href='/wiki/Magic#Area_of_Effect' title='Magic'>cube</a>. Until the spell ends, an alarm alerts you whenever a Tiny or larger <a href='/wiki/Creature' title='Creature'>creature</a> touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. </p><p>You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet. </p><noscript><link rel='stylesheet' href='https://slot1-images.wikia.nocookie.net/__cb1556201531334/common/extensions/wikia/ImageLazyLoad/css/ImageLazyLoadNoScript.css' /></noscript></div>"
    );
  }
}

exports.default = new SpellController();
// const basex  = require("basex");
// const http = require('http')
// const cors = require('cors')
// const bodyParser = require("body-parser");
// const app = express()

// app.use(bodyParser.urlencoded())
// app.use(bodyParser.json())
// app.use(cors())

// const port = 1984
// const connection = new basex.Session("localhost", port, "admin", "admin", "db460");

// // connection.connect(function(err) {
// //   if (!!err) {
// //     console.log("Error: " + err);
// //   } else {
// //     console.log("Connected");
// //   }
// // });

// app.get("/findSpell", (req, res)=>{
//   res.send("Backend")
// })

// app.listen(1984);

// var client = new basex.Client({
//   host: 'localhost',
//   port: 3001,
//   path: '/rest/mydatabase'
// });

// class SpellController{
//   async helloworld(req, res){
//     console.log(client.query('for $i in 10 return $i'))
//   }
// }

// export default new SpellController()

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

/* sql example
// const express = require("express");
// const app = express()
// const port = 3001

// // app.use(bodyParser.urlencoded());
// // app.use(bodyParser.json());

// // const connection = mysql.createConnection({
// //   host: "localhost",
// //   user: "admin",
// //   password: "admin",
// //   database: "db360"
// // });

// // app.get('/test', (req, res)=> res.send('Hello World'))

// // connection.connect(function(err) {
// //   if (!!err) {
// //     console.log("Error: " + err);
// //   } else {
// //     console.log("Connected");
// //   }
// // });

// // app.post("/login", (req, res) => {
// //   let query =
// //     "SELECT DISTINCT course.id AS courseid, course.title, student.name, grade FROM student NATURAL JOIN classsection INNER JOIN course ON course.id = classsection.courseid     WHERE student.studentid = " +
// //     req.body.id;
// //   connection.query(
// //     query,

// //     function(err, rows, fields) {
// //       if (!!err) {
// //         res.send(undefined);
// //       } else {
// //         res.send(rows);
// //       }
// //     }
// //   );
// // });

// // app.post("/careerList", (req, res) => {
// //   connection.query("SELECT * FROM career", function(err, rows, fields) {
// //     if (!!err) {
// //       console.log("Error in query: " + err);
// //     } else {
// //       res.send(rows);
// //     }
// //   });
// // });

// // app.post("/allClassesNeeded", (req, res) => {
// //   let query =
// //     "SELECT * FROM course LEFT JOIN preq ON course.id = preq.courseid WHERE course.id IN(( SELECT courseid as id FROM graduation UNION SELECT courseid as id FROM wants WHERE wants.careerid = " +
// //     req.body.chosenProfession +
// //     " )) AND course.id NOT IN ( SELECT courseid FROM classsection WHERE studentid = " +
// //     req.body.studentId +
// //     " )";
// //   connection.query(
// //     query,

// //     function(err, rows, fields) {
// //       if (!!err) {
// //         console.log("Error in query: " + err);
// //       } else {
// //         res.send(rows);
// //       }
// //     }
// //   );
// // });

// // app.post("/suggestClasses", (req, res) => {
// //   let query =
// //     "SELECT * FROM course LEFT JOIN preq ON course.id = preq.courseid WHERE course.id IN(( SELECT courseid as id FROM graduation UNION SELECT courseid as id FROM wants WHERE wants.careerid = " +
// //     req.body.chosenProfession +
// //     " )) AND course.id NOT IN ( SELECT courseid FROM classsection WHERE studentid = " +
// //     req.body.studentId +
// //     " ) ORDER BY course.id";
// //   connection.query(
// //     query,

// //     function(err, rows, fields) {
// //       if (!!err) {
// //         console.log("Error in query: " + err);
// //       } else {
// //         res.send(rows);
// //       }
// //     }
// //   );
// // });

// // app.post("/preqList", (req, res) => {
// //   connection.query(
// //     "SELECT a.requires, a.initial, b.secondary, c.third FROM (SELECT requires, courseid, count(requires) initial FROM preq GROUP BY requires) as a LEFT JOIN (SELECT requires, courseid, count(requires) secondary FROM preq GROUP BY requires) as b on  a.courseid = b.requires LEFT JOIN (SELECT requires, courseid, count(requires) third FROM preq GROUP BY requires) as c on b.courseid = c.requires",
// //     function(err, rows, fields) {
// //       if (!!err) {
// //         console.log("Error in query: " + err);
// //       } else {
// //         res.send(rows);
// //       }
// //     }
// //   );
// // });

// // app.listen(8080);
// app.listen(port, () => console.log(`listening on port ${port}!`))

*/
