import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TokensModule } from './tokens/tokens.module';
import { MeetingsModule } from './meetings/meetings.module';
import { RoomsModule } from './rooms/rooms.module';
import { CustomersModule } from './customers/customers.module';
import { MeetingParticipantsModule } from './meeting-participants/meeting-participants.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TokensModule,
    MeetingsModule,
    RoomsModule,
    CustomersModule,
    MeetingParticipantsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
