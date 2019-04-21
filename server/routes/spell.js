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