import { Module } from '@nestjs/common';
import { MeetingParticipantsService } from './meeting-participants.service';
import { MeetingParticipantsController } from './meeting-participants.controller';

@Module({
  controllers: [MeetingParticipantsController],
  providers: [MeetingParticipantsService],
})
export class MeetingParticipantsModule {}
