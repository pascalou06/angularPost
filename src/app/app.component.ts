import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POSTS';
  posts = [ 
    {
      title : "Mon premier post",
      content : "content of my first post",
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : "Mon deuxième post",
      content : "content of my second post",
      loveIts : 0,
      created_at : new Date()
    },
    {
      title : "Encore un post",
      content : "content of my new post",
      loveIts : 0,
      created_at : new Date()
    }
  ]
}
