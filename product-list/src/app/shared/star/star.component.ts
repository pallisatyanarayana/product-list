import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating: number;
  public startWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {

    this.startWidth = this.rating * 75 / 5;

  }

  onClick(){
    this.ratingClicked.emit(`start rating  = ${this.rating} was clicked` );
    
  }

}
