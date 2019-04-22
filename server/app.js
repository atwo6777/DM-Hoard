// import xquery from "simple.js"

const express = require("express");
const basex  = require("basex");
const http = require('http')
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

const port = 1984
const connection = new basex.Session("localhost", port, "admin", "admin", "db460");

// connection.connect(function(err) {
//   if (!!err) {
//     console.log("Error: " + err);
//   } else {
//     console.log("Connected");
//   }
// });

app.get("/test", (req, res)=>{
  res.send("Backend")
})

app.listen(1984);

// const router = express.Router()
// const server = http.createServer(app);

// server.listen(port);
// // server.on('error', onError);
// server.on('listening', onListening);

// app.set('port', port)
// router.get('/test', (req,res)=>{
//     res.send("It worked")
// })



// function onListening() {
//   // var addr = server.address();
//   // var bind = typeof addr === 'string'
//   //   ? 'pipe ' + addr
//   //   : 'port ' + addr.port;
//   // debug('Listening on ' + bind);
// }

// module.exports = router
// // router.listen(port);
// // router.listen(port, () => console.log(`listening on port ${port}!`))

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

// // var express
// // // import spell from "spell.js"
// // var app = express()

// // app.use('/spell', (req,res,next)=>{
// //   console.log("spell")
// // })
// // const text = 'for $i in 10 return $i'


 
// //  client.query(query, data=>{
//   // console.log("query?")
// //   console.log(data)
// // })

// // var app = express();

// // // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'ejs');

// // app.use(cors())
// // app.use(logger('dev'));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(express.static(path.join(__dirname, 'public')));

// // app.use('/spell', spell);

// // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   next(createError(404));
// // });

// // // error handler
// // app.use(function(err, req, res, next) {
// //   // set locals, only providing error in development
// //   res.locals.message = err.message;
// //   res.locals.error = req.app.get('env') === 'development' ? err : {};

// //   // render the error page
// //   res.status(err.status || 500);
// //   res.render('error');
// // });

// // module.exports = app;
