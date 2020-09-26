import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  constructor() { }

  @Input() product :any;
  @Output() parentData: EventEmitter<string> = new EventEmitter<string>();
 
  ngOnInit() {
  }

  SendToParent(){

    let name=prompt("Enter name");

    this.parentData.emit(name);
  }
}
