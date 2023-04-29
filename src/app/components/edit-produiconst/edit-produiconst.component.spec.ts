import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProduiconstComponent } from './edit-produiconst.component';

describe('EditProduiconstComponent', () => {
  let component: EditProduiconstComponent;
  let fixture: ComponentFixture<EditProduiconstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProduiconstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProduiconstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
