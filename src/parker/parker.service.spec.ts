import { Test, TestingModule } from '@nestjs/testing';
import { ParkerService } from './parker.service';

describe('ParkerService', () => {
  let service: ParkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkerService],
    }).compile();

    service = module.get<ParkerService>(ParkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
