import { Module } from '@nestjs/common';
import { ParkerService } from './parker.service';
import { ParkerController } from './parker.controller';

@Module({
  controllers: [ParkerController],
  providers: [ParkerService],
})
export class ParkerModule {}
