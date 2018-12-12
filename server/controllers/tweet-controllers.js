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

tweetCtrl.putTweet = async (req, res, next)=> {
    const tweet = { 
        user : req.body.user,
        name : req.body.name,
        body : req.body.body,
        likes: req.body.likes,
        avatar : req.body.avatar
    }
    await tweetModel.findOneAndUpdate({user:req.params.user}, {$set:tweet},{new:true})
    res.json({status: 'Empregado Atualizado'})
}

tweetCtrl.deleteTweet = async (req, res, next)=>{
    await tweetModel.findOneAndDelete({user:req.params.user})
    res.json({status: 'Empregado Atualizado'})
}



module.exports = tweetCtrl;