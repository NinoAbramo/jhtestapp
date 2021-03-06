var express = require('express');
var router = express.Router();

var ctrlHome = require('../controllers/home');
var ctrlPlayers = require('../controllers/players');

/* GET home page. */
router.get('/', ctrlHome.landing);
router.get('/game/', ctrlPlayers.readgame);
router.get('/game/:playerid', ctrlPlayers.readgame);
router.get('/players/:playerid', ctrlPlayers.getplayer);
router.put('/players/:playerid/:phrase', ctrlPlayers.putplayer);

module.exports = router;
