import { TestBed, inject } from '@angular/core/testing';

import { PoliticaProMetricsApiService } from './politica-pro-metrics-api-service.service';

describe('PoliticaProMetricsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliticaProMetricsApiService]
    });
  });

  it('should be created', inject([PoliticaProMetricsApiService], (service: PoliticaProMetricsApiService) => {
    expect(service).toBeTruthy();
  }));
});
