import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectBookItems } from './reducers';
import { BookItem } from './models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bookcollection',
  templateUrl: './bookcollection.component.html',
  styleUrls: ['./bookcollection.component.css']
})
export class BookcollectionComponent implements OnInit {

  bookList$: Observable<BookItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookItems);
  }

}
