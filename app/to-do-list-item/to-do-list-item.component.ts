import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { ListItem } from '../models/ToDoListItem';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css']
})
export class ToDoListItemComponent implements OnInit {
  @Input('item') item: ListItem | null = null;
  expanded: boolean = false;

  constructor(
    private toDoServ: ToDoListService
  ) { }

  ngOnInit(): void {
  }  

  completeItem(item: ListItem | null, event: any){
    event?.stopPropagation();

    if(item)
      item.done = true;
  }

  restartItem(item: ListItem | null, event: any){
    event?.stopPropagation();

    if(item)
      item.done = false;
  }

  removeItem(item: ListItem | null, event: any){
    event?.stopPropagation();

    if(item)
      this.toDoServ.removeItem(item);
  }

  toggleBody(){
    this.expanded = !this.expanded
  }

}
