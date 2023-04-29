import { TestBed } from '@angular/core/testing';

import { ProduitConstructiblesService } from './produit-constructibles.service';

describe('ProduitConstructiblesService', () => {
  let service: ProduitConstructiblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitConstructiblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
