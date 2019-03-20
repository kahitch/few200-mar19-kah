import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // This only works on inputs. Effective on big arrays.
})
export class ListComponent implements OnInit {

  @Input() items: TodoItem[];
  constructor() { }

  ngOnInit() {
  }

}
