import { Test, TestingModule } from '@nestjs/testing';
import { TransacionSubmitService } from './transacion-submit.service';

describe('TransacionSubmitService', () => {
  let service: TransacionSubmitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransacionSubmitService],
    }).compile();

    service = module.get<TransacionSubmitService>(TransacionSubmitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
