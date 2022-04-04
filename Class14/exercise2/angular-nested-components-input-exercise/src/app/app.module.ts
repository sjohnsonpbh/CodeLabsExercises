import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PostsComponent } from './my-profile/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
