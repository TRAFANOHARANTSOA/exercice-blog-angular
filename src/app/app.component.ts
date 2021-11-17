import { Component, Input } from '@angular/core';
import { Post } from 'post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'BLOGNAKA';
  
  @Input() post: Post = {
    title : 'Mon premier post',
    content: 'Lorem ipsum',  
    loveIts: 0 
  }
  constructor() {

    
  }

}

