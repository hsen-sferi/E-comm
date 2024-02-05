"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let userService = class userService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async Createuser(CreateUserDto) {
        const newuser = await new this.userModel(CreateUserDto);
        return newuser.save();
    }
    async Updateuser(userId, UpdateUserDto) {
        const existinguser = await this.userModel.findByIdAndUpdate(userId, UpdateUserDto, { new: true });
        if (!existinguser) {
            throw new common_1.NotFoundException('user Data Not Found');
        }
        return existinguser;
    }
    async GetAllusers() {
        const userData = await this.userModel.find().select("-__v");
        if (!userData || userData.length == 0) {
            throw new common_1.NotFoundException('user Data Not Found !');
        }
        return userData;
    }
    async Findbyusername(username) {
        const user = await this.userModel.findOne({ username });
        return user;
    }
    async Getuser(userId) {
        const existinguser = await this.userModel.findById(userId).exec();
        if (!existinguser) {
            throw new common_1.NotFoundException(`user #${userId} Not Found !`);
        }
        return existinguser;
    }
    async deleteuser(userId) {
        const deleteuser = await this.userModel.findByIdAndDelete(userId);
        if (!deleteuser) {
            throw new common_1.NotFoundException(`user #${userId} Not Found !`);
        }
        return deleteuser;
    }
};
exports.userService = userService;
exports.userService = userService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("user")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], userService);
//# sourceMappingURL=user.service.js.map