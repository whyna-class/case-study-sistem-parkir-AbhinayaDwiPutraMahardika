import { PartialType } from '@nestjs/mapped-types';
import { CreateParkerDto } from './create-parker.dto';

export class UpdateParkerDto extends PartialType(CreateParkerDto) {}
