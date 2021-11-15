import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public mesPost:Post[] = [
    {title:"Mon premier post", content:"Lorem ipsum",loveIts:0},
    {title:"Mon deuxième post", content:"Lorem ipsum",loveIts:0},
    {title:"Mon troisième post", content:"Lorem ipsum",loveIts:0}
  ];

}

export interface Post {
  title:string,
  content:string,
  loveIts:number,

}
