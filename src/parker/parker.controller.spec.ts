import { Test, TestingModule } from '@nestjs/testing';
import { ParkerController } from './parker.controller';
import { ParkerService } from './parker.service';

describe('ParkerController', () => {
  let controller: ParkerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkerController],
      providers: [ParkerService],
    }).compile();

    controller = module.get<ParkerController>(ParkerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
