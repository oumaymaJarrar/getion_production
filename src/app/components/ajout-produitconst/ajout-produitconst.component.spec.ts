import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProduitconstComponent } from './ajout-produitconst.component';

describe('AjoutProduitconstComponent', () => {
  let component: AjoutProduitconstComponent;
  let fixture: ComponentFixture<AjoutProduitconstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProduitconstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProduitconstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
