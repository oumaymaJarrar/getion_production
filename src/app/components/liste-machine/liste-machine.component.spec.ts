import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMachineComponent } from './liste-machine.component';

describe('ListeMachineComponent', () => {
  let component: ListeMachineComponent;
  let fixture: ComponentFixture<ListeMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMachineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
