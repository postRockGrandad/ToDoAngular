import { Component, OnInit } from '@angular/core';
import { ListItem } from '../models/ToDoListItem';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  list: Array<ListItem>;

  constructor(
    private toDoServ: ToDoListService
  ) { 
    this.list = this.toDoServ.list;
  }

  ngOnInit(): void {
  }
}
