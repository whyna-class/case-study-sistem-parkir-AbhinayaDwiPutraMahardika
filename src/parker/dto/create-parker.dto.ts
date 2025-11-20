import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateParkerDto {
    @IsNotEmpty({ message: 'Plat harus di isi' })
    @IsString({ message: 'Plat harus berupa String'})
    platNomer: string;

    @IsNotEmpty({ message: 'Jenis Kendaraan harus di isi' })
    @IsString({message: 'Jenis Kendaraan harus berupa String'})
    jenisKendaraan: string;

    @IsNotEmpty({ message: 'Durasi harus di isi' })
    @IsNumber()
    durasi: number;
}
