import { Injectable,NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iuser } from './interface/user.interface';
import { CreateUserDto  } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class userService {
  
  constructor(@InjectModel("user") private userModel:Model<Iuser>){}




    async Createuser (CreateUserDto :CreateUserDto ):Promise<Iuser> {
      const newuser =await new this.userModel(CreateUserDto );
      return newuser.save();
    }
  
    async Updateuser (userId:string, UpdateUserDto:UpdateUserDto):Promise<Iuser>{
      const existinguser=await this.userModel.findByIdAndUpdate(userId ,UpdateUserDto,{new:true});
        
      if(!existinguser){
        throw new NotFoundException('user Data Not Found');
      }
      return existinguser;
    }

    async GetAllusers():Promise<Iuser[]>{
      const userData = await this.userModel.find().select("-__v")
      if (!userData || userData.length==0){
        throw new NotFoundException('user Data Not Found !');
      }
      return userData
    }

    async Findbyusername(username:string):Promise<Iuser>{
      const user=await this.userModel.findOne({username})
      return user
    }

    async Getuser (userId:string):Promise<Iuser>{
      const existinguser = await this.userModel.findById(userId).exec();
      if (!existinguser){
        throw new NotFoundException(`user #${userId} Not Found !`)
      }
      return existinguser;
    }


    async deleteuser (userId:string):Promise<Iuser>{
      const deleteuser= await this.userModel.findByIdAndDelete(userId)
      if (!deleteuser){
        throw new NotFoundException(`user #${userId} Not Found !`)
      }
      return deleteuser
    }
  }