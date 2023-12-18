import { Test, TestingModule } from '@nestjs/testing';
import { WCService } from './wc.service';

describe('WCService', () => {
  let service: WCService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WCService],
    }).compile();

    service = module.get<WCService>(WCService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
