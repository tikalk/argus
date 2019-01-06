var express = require('express');
var router = express.Router();
const client = require('../src/lib/kubeClient')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('OK');
});
router.get('/namespaces', (req, res) => {
  client.getNamespace().then(ns => {
    res.send(ns.body.items.map(item => (item.metadata)));
  });
})
module.exports = router;
