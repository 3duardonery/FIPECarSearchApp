import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {

  @Input() placeholder: string = 'placeholder';
  @Input() isEnabled: boolean = true;
  @Output() onChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeValueHandler(event: any): void {
    this.onChangeEvent.emit(event);
  }

}
