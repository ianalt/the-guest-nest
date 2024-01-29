import { Test, TestingModule } from '@nestjs/testing';
import { MeetingParticipantsController } from './meeting-participants.controller';
import { MeetingParticipantsService } from './meeting-participants.service';

describe('MeetingParticipantsController', () => {
  let controller: MeetingParticipantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeetingParticipantsController],
      providers: [MeetingParticipantsService],
    }).compile();

    controller = module.get<MeetingParticipantsController>(MeetingParticipantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
