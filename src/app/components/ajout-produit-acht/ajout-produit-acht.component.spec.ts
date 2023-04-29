import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutProduitAchtComponent } from './ajout-produit-acht.component';

describe('AjoutProduitAchtComponent', () => {
  let component: AjoutProduitAchtComponent;
  let fixture: ComponentFixture<AjoutProduitAchtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutProduitAchtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutProduitAchtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
