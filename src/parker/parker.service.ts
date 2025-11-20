import { Injectable } from '@nestjs/common';
import { CreateParkerDto } from './dto/create-parker.dto';
import { UpdateParkerDto } from './dto/update-parker.dto';

@Injectable()
export class ParkerService {
  create(createParkerDto: CreateParkerDto) {
    return 'This action adds a new parker';
  }

  findAll() {
    return `This action returns all parker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parker`;
  }

  update(id: number, updateParkerDto: UpdateParkerDto) {
    return `This action updates a #${id} parker`;
  }

  remove(id: number) {
    return `This action removes a #${id} parker`;
  }
}
