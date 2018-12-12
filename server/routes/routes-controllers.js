const tweetCtrl = require('../controllers/tweet-controllers');
const router = require('express').Router();


router.get('/', tweetCtrl.getTweet);
router.post('/', tweetCtrl.postTweet);




module.exports = router; 