const tweetCtrl = require('../controllers/tweet-controllers');
const router = require('express').Router();


router.get('/', tweetCtrl.getTweet);
router.post('/', tweetCtrl.postTweet);
router.put('/:user', tweetCtrl.putTweet);
router.delete('/:user', tweetCtrl.deleteTweet);


module.exports = router; 