import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { TareaService } from './tarea.service';

describe('TareaService', () => {
  let service: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(TareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
