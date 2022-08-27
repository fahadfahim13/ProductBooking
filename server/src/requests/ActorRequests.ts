import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ActorCreateRequest {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsString()
    image: string;
}

export class ActorUpdateRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;

    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsString()
    image: string;
  }
  
export class GETActorDetailsRequest {
    @IsNotEmpty()
    @IsNumber()
    id: number;
}

