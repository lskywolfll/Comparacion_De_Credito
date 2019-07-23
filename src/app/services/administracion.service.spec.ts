import { TestBed } from '@angular/core/testing';

import { AdministracionService } from './administracion.service';

describe('AdministracionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdministracionService = TestBed.get(AdministracionService);
    expect(service).toBeTruthy();
  });
});
