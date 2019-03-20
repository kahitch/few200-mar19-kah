import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectCurrent, decrementDisabled, selectCountingBy, resetDisabled } from '../../reducers';
import { Observable } from 'rxjs';
import * as actions from '../../actions/counter.actions';

@Component({
  selector: 'app-redux-demo',
  templateUrl: './redux-demo.component.html',
  styleUrls: ['./redux-demo.component.css']
})
export class ReduxDemoComponent implements OnInit {

  atStart$: Observable<boolean>;
  resetDisabled$: Observable<boolean>;
  count$: Observable<number>;
  countingBy$: Observable<number>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.count$ = this.store.select(selectCurrent);
    this.atStart$ = this.store.select(decrementDisabled);
    this.countingBy$ = this.store.select(selectCountingBy);
    this.resetDisabled$ = this.store.select(resetDisabled);
  }

  increment() {
    this.store.dispatch(new actions.CountImcremented());
  }

  decrement() {
    this.store.dispatch(new actions.CountDecremented());
  }

  reset() {
    this.store.dispatch(new actions.ResetCounter());
  }

  setCountBy(val: number) {
    this.store.dispatch(new actions.SetCountBy(val));
  }
}
