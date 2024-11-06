import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css'],
})
export class CounterButtonComponent implements OnInit {
  //type of object how you will getting from the store & what are the name you are using in appModule same name you can use it
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit() {}

  onIncrement() {
    //Now dispatching the function to store & here increment is the action name
    this.store.dispatch(increment());
    console.log( this.store.dispatch(increment()))
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
