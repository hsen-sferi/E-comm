import { userService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class userController {
    private readonly userService;
    constructor(userService: userService);
    createuser(response: any, CreateuserDto: CreateUserDto): Promise<any>;
    updateuser(response: any, userId: string, UpdateuserDto: UpdateUserDto): Promise<any>;
    findbyusername(Response: any, username: string): Promise<any>;
    getusers(Response: any): Promise<any>;
    getuser(Response: any, userId: string): Promise<any>;
    deleteuser(Response: any, userId: string): Promise<any>;
}
