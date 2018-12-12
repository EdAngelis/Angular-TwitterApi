import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [{
    user:"stevie",
    name:"Stevie Feliciano",
    body:"Stevie Feliciano is alibrary scientist living in New York City. She likes to spend her time reading, running, and writing.",
    likes: [],
    avatar:"../../assets/img/avatars/stevie.jpg"
  },
  {
    user:"Jenny",
    name:"Jenny Hess",
    body:"Jenny is a student studying Media Management at the New School",
    likes: [],
    avatar:"../../assets/img/avatars/jenny.jpg"
  },
  {
    user:"Veronica",
    name:"Veronica Osi",
    body:"Veronika Ossi is a set designer living in New York who <a>enjoys kittens, music, and partying.",
    likes: ['Jenny', 'Stivie'],
    avatar:"../../assets/img/avatars/veronika.jpg"
  }]

  likedTweet= undefined;
  currentUser= 'stevie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildCOmponent(tweet){
    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })
    this.tweets[index].likes.push(this.currentUser);
    console.log(this.tweets[index].likes);
  }

}
