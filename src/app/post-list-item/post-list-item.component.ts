import { Component, Input, OnInit } from '@angular/core';

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
    
  constructor() {
  }

  ngOnInit() {
  }

  getloveIts() {
    return this.loveIts;
  }

  onLoveIts(){
    console.log('j\'aime');
  }

  onDontLoveIts(){
    console.log('je n\'aime pas');
  }
}
