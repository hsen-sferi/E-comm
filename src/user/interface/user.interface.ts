import { Document } from "mongoose";

export interface Iuser extends Document{

    role:string;
    username:string;
    email:string;
    password:string;
    refreshToken:string
    
}