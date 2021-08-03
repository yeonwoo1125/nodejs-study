const express = require('express');

const router = express.Router();

//GET / 라우타
router.get('/', (req, res) => {
  res.send('Hello, Express');

});
module.exports = router;
