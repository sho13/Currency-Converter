const router = require("express").Router();
const request = require('request');

const url = `https://api.exchangeratesapi.io/`;

router.get(`/:country`, (req, res) => {
  const { country } = req.params;

  request.get(`${url}latest?base=${country}`, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      res.send(body);
    }
  })
});

module.exports = router;
