import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParkerService } from './parker.service';
import { CreateParkerDto } from './dto/create-parker.dto';
import { UpdateParkerDto } from './dto/update-parker.dto';

@Controller('parker')
export class ParkerController {
  constructor(private readonly parkerService: ParkerService) {}

  @Post()
  create(@Body() createParkerDto: CreateParkerDto) {
    return this.parkerService.create(createParkerDto);
  }

  @Get()
  findAll() {
    return this.parkerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkerDto: UpdateParkerDto) {
    return this.parkerService.update(+id, updateParkerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkerService.remove(+id);
  }
}
