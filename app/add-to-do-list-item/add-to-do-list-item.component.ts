import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ToDoListService } from '../services/to-do-list.service';

@Component({
  selector: 'app-add-to-do-list-item',
  templateUrl: './add-to-do-list-item.component.html',
  styleUrls: ['./add-to-do-list-item.component.css']
})
export class AddToDoListItemComponent implements OnInit {
  itemExists: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
    const title: string = form.get("newTitle")?.value;
    const body: string = form.get("newBody")?.value; 

    let match = this.toDoServ.list.filter(item => item.title === title && item.body === body)?.[0];
    if(match){
      return { duplicateItem: { value: { title: title, body: body }}} 
    }

    return null;
  }
  addForm: UntypedFormGroup;
  get newTitleControl(): AbstractControl | null { return this.addForm.get("newTitle"); };
  get newBodyControl(): AbstractControl | null { return this.addForm.get("newBody"); };
  get newTitle(): string { return this.newTitleControl?.value };
  set newTitle(title: string) { this.newTitleControl?.setValue(title) };
  get newBody(): string { return this.newBodyControl?.value };
  set newBody(body: string) { this.newBodyControl?.setValue(body) };

  constructor(
    private toDoServ: ToDoListService
  ) {
    this.addForm = new UntypedFormGroup({
      newTitle: new UntypedFormControl("", [Validators.required, Validators.minLength(5)]),
      newBody: new UntypedFormControl("", [Validators.required, Validators.minLength(5)]),
    }, {
      validators: this.itemExists
    });
   }

  ngOnInit(): void {
  }

  addItem() {
    this.toDoServ.addNewItem({title: this.newTitle, body: this.newBody, done: false});

    this.newTitle = "";
    this.newBody = "";
    this.newBodyControl?.reset();
    this.newTitleControl?.reset();
  }
}
