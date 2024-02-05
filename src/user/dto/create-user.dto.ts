
import { IsString,IsNotEmpty} from "@nestjs/class-validator";



export class CreateUserDto {
    
@IsString()
@IsNotEmpty()
    username:string;

@IsString()
@IsNotEmpty()
    email:string;

@IsString()
@IsNotEmpty()
    password:string;

@IsString()
@IsNotEmpty()
    refreshToken:string

}
