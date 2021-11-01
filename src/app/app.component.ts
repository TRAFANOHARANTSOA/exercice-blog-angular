import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public mesPost:monTableauPost[] = [
    {title:"Mon premier post", content:"Lorem ipsum",loveIts:0},
    {title:"Mon deuxième post", content:"Lorem ipsum",loveIts:0},
    {title:"Mon troisième post", content:"Lorem ipsum",loveIts:0}
  ];

}

export interface monTableauPost {
  title:string,
  content:string,
  loveIts:number,

}
