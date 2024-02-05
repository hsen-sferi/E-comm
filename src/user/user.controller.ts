import { Controller, Get,Put, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors, UploadedFile, Query, Response, UploadedFiles } from '@nestjs/common';
import { userService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Controller('user')
export class userController {
  constructor(private readonly userService: userService) {}

  @Post()


  
    async createuser (@Res() response , @Body() CreateuserDto:CreateUserDto){
  
    try{
      const newuser = await this.userService.Createuser(CreateuserDto);
  
      return response.status(HttpStatus.CREATED).json({
        message : 'user has been created successfully',
        status: HttpStatus.CREATED,
        data:newuser
      });
    }
    
    catch(err){
      return response.status(HttpStatus.BAD_REQUEST).json({
        status:400,
        message:'error ; user not created'+err,
        data:null
      });
    }
  }

  @Put('/:id')

    async updateuser(@Res() response,@Param("id") userId:string , @Body() UpdateuserDto:UpdateUserDto){

      try{

        const existinguser =await this.userService.Updateuser(userId,UpdateuserDto)
        return response.status(HttpStatus.CREATED).json({
          message : 'user has been created successfully',
          status: HttpStatus.CREATED,
          data:existinguser
        })
        
      }
      catch(err){
        return response.status(HttpStatus.BAD_REQUEST).json({
          status:400,
          message:'error ; user not created'+err,
          data:null
        });
      }
  }

  @Get("/getbyusername")

async findbyusername(@Res() Response ,@Query("username") username:string){
  try {
    const existinguser = await this.userService.Findbyusername(username)
    return Response.status(HttpStatus.OK).json({
        message :" user Found Succesfully",
        status: HttpStatus.OK,
        data:existinguser
    })
  } catch (err) {
    return Response.status(err.status).json({
      message :err.response,
      status: HttpStatus.BAD_REQUEST,
      data:null
  })
  }
}

@Get()
  
async getusers(@Res() Response){
  try {
    const userData = await this.userService.GetAllusers()
    return Response.status(HttpStatus.OK).json({
        message :"All users Data Found ",
        status: HttpStatus.OK,
        data:userData
    })
  }catch(err){
    return Response.status(err.status).json({
      message :err.response,
      status: HttpStatus.BAD_REQUEST,
      data:null
  })
}
} 



@Get('/:id')
  
async getuser(@Res() Response, @Param("id") userId:string){
  try {
    const existinguser = await this.userService.Getuser(userId)
    return Response.status(HttpStatus.OK).json({
        message :" user Found Succesfully",
        status: HttpStatus.OK,
        data:existinguser
    })
  }catch(err){
    return Response.status(err.status).json({
      message :err.response,
      status: HttpStatus.BAD_REQUEST,
      data:null
  })
}
} 



@Delete('/:id')
  
async deleteuser(@Res() Response, @Param("id") userId:string){
  try {
    const deleteuser = await this.userService.deleteuser(userId)
    return Response.status(HttpStatus.OK).json({
        message :" user Deleted Succesfully",
        status: HttpStatus.OK,
        data:deleteuser
    })
  }catch(err){
    return Response.status(err.status).json({
      message :err.response,
      status: HttpStatus.BAD_REQUEST,
      data:null
  })
}
} 

} 
