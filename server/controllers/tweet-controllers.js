const tweetModel = require('../models/tweet');

const tweetCtrl = {};

tweetCtrl.getTweet = async (req, res, next)=>{
    const tweets = await tweetModel.find()
    res.json(tweets);
}

tweetCtrl.postTweet = async (req, res, next)=> {
    const tweets = new tweetModel(req.body);
    await tweets.save()
    .then(x=>{
        res.status(201).send({message:"Tweeted"});
    }).catch(e=>{
        res.status(400).send({message: "Ocorreu algum erro", data:e});
    });

}

module.exports = tweetCtrl;