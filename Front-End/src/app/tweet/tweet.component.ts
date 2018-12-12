import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../service/feed.service';
import { Tweet } from '../models/tweet';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css'],
  providers: [FeedService]

})
export class TweetComponent implements OnInit {


  constructor(private FeedService: FeedService) {
  
   }

  ngOnInit() {

  }

}
