var express = require('express');
var router = express.Router();

module.exports = router

const stand = require('../stand')


router.get('/stand/:plat/:asso/:act', (req, res) => {
    res.json({
        "plat": req.params.plat,
		"asso": req.params.asso,
		"act": req.params.act,
		
        "yourstand": stand.stand(req.params.plat,req.params.asso,req.params.act),
    })
})