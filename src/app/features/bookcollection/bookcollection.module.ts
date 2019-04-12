import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookcollectionComponent } from './bookcollection.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [BookcollectionComponent, EntryComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class BookcollectionModule { }
