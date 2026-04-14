const express = require('express');
const router = express.Router();
const { addvisitor } = require('../controller/portfolioController');

router.post('/addvisitor', addvisitor);



module.exports = router;
