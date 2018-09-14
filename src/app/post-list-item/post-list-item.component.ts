import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  loveIts : number = 0;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  onLoveIt() {
    this.loveIts++;
  }

  onNoLoveIt() {
    this.loveIts--;
  }
}
