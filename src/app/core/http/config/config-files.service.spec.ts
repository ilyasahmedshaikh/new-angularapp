import { TestBed } from '@angular/core/testing';

import { ConfigFilesService } from './config-files.service';

describe('ConfigFilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigFilesService = TestBed.get(ConfigFilesService);
    expect(service).toBeTruthy();
  });
});
