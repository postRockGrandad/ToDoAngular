import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoListItemComponent } from './add-to-do-list-item.component';

describe('AddToDoListItemComponent', () => {
  let component: AddToDoListItemComponent;
  let fixture: ComponentFixture<AddToDoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDoListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
