import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { customIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-input-counter',
  templateUrl: './custom-input-counter.component.html',
  styleUrls: ['./custom-input-counter.component.css'],
})
export class CustomInputCounterComponent implements OnInit {
  cusValue: number;
  constructor(private store: Store<{ couter: CounterState }>) {}

  ngOnInit() {}
  addValue() {
    console.log(this.cusValue);
    this.store.dispatch(customIncrement({ count: +this.cusValue }));
  }
}
