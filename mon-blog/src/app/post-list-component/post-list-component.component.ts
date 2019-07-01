import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  @Input() loveIt:number=0;
  @Input() subTitle:string;
  @Input() content:string;
  @Input() date:Date;
  positive:boolean=false;
  
  constructor() { }

  ngOnInit() {
  }
  isPositive() {
    if(this.loveIt>0) return true;
    else if (this.loveIt<0) return false;
    else return undefined;
    
  }
  addLoveIt()
  {
    this.loveIt++;
  }
  reduiceLoveIt()
  {
    this.loveIt--;
  }
}
