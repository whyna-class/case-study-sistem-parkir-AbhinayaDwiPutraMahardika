import { PartialType } from '@nestjs/mapped-types';
import { CreateParkerDto } from './create-parker.dto';
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateParkerDto extends PartialType(CreateParkerDto) {}
