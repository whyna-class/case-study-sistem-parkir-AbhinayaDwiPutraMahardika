import { Module } from '@nestjs/common';
import { ParkerService } from './parker.service';
import { ParkerController } from './parker.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ParkerController],
  providers: [ParkerService],
  exports: [ParkerService]
})
export class ParkerModule {}
