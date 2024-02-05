import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userController } from './user.controller';
import { userService } from './user.service';
import { UserSchema } from './entities/user.entity';
// import {  adminSchema } from 'src/admin/entities/admin.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'user', schema: UserSchema, discriminators: [
        // {name: 'admin', schema: adminSchema},
        {name: 'user', schema: UserSchema},
        
      ]},
    ]),
  ],
  providers: [userService],
  controllers: [userController],
  // exports: [userService],
  
})
export class UserModule {}
