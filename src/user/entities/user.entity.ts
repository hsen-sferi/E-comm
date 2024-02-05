import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps:true , discriminatorKey:"role"})

export class User {

    @Prop({type:String  , enum:["admin","user"]})
    role:string;

    @Prop({required:true})
    username:string;

    @Prop({required:true})
    email:string;

    @Prop({required:true})
    password:string;

    @Prop({})
    refreshToken:string;

}

export const UserSchema = SchemaFactory.createForClass(User)