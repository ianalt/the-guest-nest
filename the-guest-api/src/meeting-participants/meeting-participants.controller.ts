import { Controller } from '@nestjs/common';
import { MeetingParticipantsService } from './meeting-participants.service';

@Controller('meeting-participants')
export class MeetingParticipantsController {
  constructor(private readonly meetingParticipantsService: MeetingParticipantsService) {}
}
