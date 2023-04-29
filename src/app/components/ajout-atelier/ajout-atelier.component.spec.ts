import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAtelierComponent } from './ajout-atelier.component';

describe('AjoutAtelierComponent', () => {
  let component: AjoutAtelierComponent;
  let fixture: ComponentFixture<AjoutAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAtelierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
