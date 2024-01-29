import { Test, TestingModule } from '@nestjs/testing';
import { MeetingParticipantsService } from './meeting-participants.service';

describe('MeetingParticipantsService', () => {
  let service: MeetingParticipantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeetingParticipantsService],
    }).compile();

    service = module.get<MeetingParticipantsService>(MeetingParticipantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
