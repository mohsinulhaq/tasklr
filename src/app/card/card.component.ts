import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() header: string;
  @Input() body: string;
  @Input() footer: string;
  @Input() dismissible: boolean;
  @Output() dismissed: EventEmitter<string>;

  constructor() {
    this.dismissed = new EventEmitter();
  }

  ngOnInit() { }

  onClick(event) {
    event.stopPropagation();
    this.dismissed.emit(this.header);
  }
}
