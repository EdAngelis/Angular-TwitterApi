import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }