import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBookItem } from '../../actions/list.actions';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  public formats: any[];

  constructor(private store: Store<State>) {
    this.formats = ['Hardcover', 'Paperback', 'E-Book'];
  }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLInputElement) {

    // Dispatch an action
    if (title.value.length > 0 && author.value.length > 0 && this.formats.includes(format.value)) {
      this.store.dispatch(new AddedBookItem(title.value, author.value, format.value));
      title.value = '';
      author.value = '';
      format.value = '';
      title.focus();
    };
  }
}

