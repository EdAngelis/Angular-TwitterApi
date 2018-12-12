import { Injectable } from '@angular/core';
import { Tweet } from '../app/models/tweet';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  readonly SERVER_TWEETS = 'http://localhost:3000/tweets';

  selectTweet: Tweet;
  Tweets: Tweet[];

  constructor(private http: HttpClient) { 
    this.selectTweet = new Tweet();
   }

getTweets(){
  return this.http.get(this.SERVER_TWEETS);
}


}
