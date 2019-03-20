import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';

@NgModule({
  declarations: [TodolistComponent],
  imports: [
    CommonModule
  ],
  exports: [TodolistComponent]
})
export class TodolistModule { }
