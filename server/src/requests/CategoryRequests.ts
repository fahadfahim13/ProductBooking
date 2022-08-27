import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CategoryCreateRequest {
    @IsNotEmpty()
    @IsString()
    name: string;
}

export class CategoryUpdateRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
  }
  
export class GETCategoryDetailsRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

