import { IsBoolean, IsEmpty, IsNotEmpty, IsNumber, IsString, isValidationOptions, ValidateIf } from 'class-validator';
import { IsNull } from 'sequelize-typescript';

export class ProductCreateRequest {
    @IsNotEmpty()
    @IsString()
    code: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    type: string;

    @IsNotEmpty()
    @IsBoolean()
    availability: boolean;
  
    @IsNotEmpty()
    @IsBoolean()
    needing_repair: boolean;

    @IsNumber()
    durability: number;

    @IsNumber()
    max_durability: number;

    @IsNumber()
    @ValidateIf((object, value) => value !== undefined && (value === null || typeof value === 'number') )
    mileage!: number | null;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    minimum_rent_period: number;

}

  
export class GETProductDetailsRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

