import { Component, Input } from '@angular/core';
import { Post } from 'post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BLOGNAKA';
  posts: Post[] = [
    {title: 'Mon premier post', content: 'Lorem ipsum', loveIts: 0},
    {title: 'Mon deuxième post', content: 'Lorem ipsum', loveIts: 0},
    {title: 'Mon troisième post', content: 'Lorem ipsum', loveIts: 0}
];


  constructor() {  
  }
}

