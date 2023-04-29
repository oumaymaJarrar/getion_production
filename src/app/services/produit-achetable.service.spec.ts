import { TestBed } from '@angular/core/testing';

import { ProduitAchetableService } from './produit-achetable.service';

describe('ProduitAchetableService', () => {
  let service: ProduitAchetableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitAchetableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
