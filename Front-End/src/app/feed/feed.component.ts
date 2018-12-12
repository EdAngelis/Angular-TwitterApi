import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../service/feed.service';
import { Tweet } from '../models/tweet';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit {


  constructor(private FeedService: FeedService) { }

  ngOnInit() {
    this.getTweets();
    
  }

  getTweets(){
    this.FeedService.getTweets()
    .subscribe(res=>{
      this.FeedService.Tweets = res as Tweet[];
      console.log(res);
    })
  }

  handleLikedTweetFromChildCOmponent(){}

}
