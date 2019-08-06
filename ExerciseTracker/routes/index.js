'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Exercise Tracker' });
});

router.get('/api/exercise/log?{userId}[&from][&to][&limit]', function (req, res) {
    if (req.method === 'GET') {
        // complete this method....
    }
});

router.get('/api/exercise/new-user', function (req, res) {
    if (req.method === 'POST') {
        // complete this method....
        res.send({ test: req.body.new_username });
    }
});

router.get('/api/exercise/add', function (req, res) {
    if (req.method === 'POST') {
        // complete this method....
    }
});

module.exports = router;
