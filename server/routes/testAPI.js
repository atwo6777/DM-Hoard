var express = require("express");
var router = express.Router();
router.get("/", function(req, res, next) {
    var query = {
        text: 'for $i in 10 return $i'
      };
      res.send(query)
});
module.exports = router;