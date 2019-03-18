import { Component, OnInit } from '@angular/core';
import { ListItem } from './models';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.css']
})
export class CommunicationsComponent implements OnInit {

  todoItems: ListItem[] = [
    { id: '1', description: 'Wax the Cat', completed: false },
    { id: '2', description: 'Contemplate Existence', completed: true }
  ]

  currentId = 3;
  constructor() { }

  ngOnInit() {
  }

  onItemAdded(what: string) {
    const id = (this.currentId++).toString();
    this.todoItems.unshift({ id, description: what, completed: false });
  }

}
