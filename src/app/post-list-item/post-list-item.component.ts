import { Component, Input, InputDecorator, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostLIstItemComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() loveIts: number | undefined;
  @Input() create_at: Date | undefined;
  
  numberOfLoveIts: number = 0;
  likeIts: number | undefined;
  dontLikeIts: number | undefined;
  
  constructor() {
  }

  ngOnInit() {
  }

  addLoveIts() {
  this.likeIts = ++ this.numberOfLoveIts;
  console.log(this.numberOfLoveIts);
  return this.likeIts;
 } 
  takeLoveIts(){
    this.dontLikeIts = -- this.numberOfLoveIts;
    console.log(this.numberOfLoveIts);
    return this.dontLikeIts;
  }
}