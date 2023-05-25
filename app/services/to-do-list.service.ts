import { Injectable } from '@angular/core';
import { ListItem } from '../models/ToDoListItem';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {
  list: Array<ListItem> = [
    {title: "Item 1", body: "Body 1", done: false},
    {title: "Item 2", body: "Body 2", done: false},
    {title: "Item 3", body: "Body 3", done: false}
  ] ;

  constructor() { }

  addNewItem(newItem: ListItem){
    this.list.push(newItem);
  }

  removeItem(toRemove: ListItem){
    const removeIndex: number = this.list.indexOf(toRemove);

    if(removeIndex >= 0){
      this.list.splice(
        this.list.indexOf(toRemove),
        1
      );
    } else {
      // throw error that item isnt in list
    }
  }
}
