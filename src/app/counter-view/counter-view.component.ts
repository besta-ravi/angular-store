import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-view',
  templateUrl: './counter-view.component.html',
  styleUrls: ['./counter-view.component.css']
})
export class CounterViewComponent implements OnInit {

  constructor(private store:Store<{counter:CounterState}>) { }
counter:number;
  ngOnInit() {
    this.store.select('counter').subscribe(data=>{
      this.counter = data.counter;
    })
  }

}