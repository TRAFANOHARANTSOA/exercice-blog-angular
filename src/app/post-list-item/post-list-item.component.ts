import { Component, Input, InputDecorator, OnInit } from '@angular/core';
import { Post} from 'post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostLIstItemComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() content: string | undefined;
  @Input() loveIts: any;
  @Input() create_at: Date | undefined;
  

  constructor() {
  }

  ngOnInit() {
  }
  addLoveIts() {
  ++ this.loveIts;
  console.log(this.loveIts);
    return this.loveIts;
 } 
  takeLoveIts(){
    -- this.loveIts;
    console.log(this.loveIts);
    return this.loveIts;
  }
}