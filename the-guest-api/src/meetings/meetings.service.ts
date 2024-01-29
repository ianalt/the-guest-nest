import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dtos/body/create-meeting.dto';
import { UpdateMeetingDto } from './dtos/body/update-meeting.dto';

@Injectable()
export class MeetingsService {
  create(createMeetingDto: CreateMeetingDto) {
    return 'This action adds a new meeting';
  }

  findAll() {
    return `This action returns all meetings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meeting`;
  }

  update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} meeting`;
  }

  remove(id: number) {
    return `This action removes a #${id} meeting`;
  }
}
