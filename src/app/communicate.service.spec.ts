import { TestBed, inject } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appReducersGenerator } from './app.reducers';
import { CommunicateService } from './communicate.service';

describe('CommunicateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        appReducersGenerator()
      ],
      providers: [CommunicateService]
    });
  });

  it('should be created', inject([CommunicateService], (service: CommunicateService) => {
    expect(service).toBeTruthy();
  }));
});
