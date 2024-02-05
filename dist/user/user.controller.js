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
exports.userController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let userController = class userController {
    constructor(userService) {
        this.userService = userService;
    }
    async createuser(response, CreateuserDto) {
        try {
            const newuser = await this.userService.Createuser(CreateuserDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'user has been created successfully',
                status: common_1.HttpStatus.CREATED,
                data: newuser
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                status: 400,
                message: 'error ; user not created' + err,
                data: null
            });
        }
    }
    async updateuser(response, userId, UpdateuserDto) {
        try {
            const existinguser = await this.userService.Updateuser(userId, UpdateuserDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'user has been created successfully',
                status: common_1.HttpStatus.CREATED,
                data: existinguser
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                status: 400,
                message: 'error ; user not created' + err,
                data: null
            });
        }
    }
    async findbyusername(Response, username) {
        try {
            const existinguser = await this.userService.Findbyusername(username);
            return Response.status(common_1.HttpStatus.OK).json({
                message: " user Found Succesfully",
                status: common_1.HttpStatus.OK,
                data: existinguser
            });
        }
        catch (err) {
            return Response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
    async getusers(Response) {
        try {
            const userData = await this.userService.GetAllusers();
            return Response.status(common_1.HttpStatus.OK).json({
                message: "All users Data Found ",
                status: common_1.HttpStatus.OK,
                data: userData
            });
        }
        catch (err) {
            return Response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
    async getuser(Response, userId) {
        try {
            const existinguser = await this.userService.Getuser(userId);
            return Response.status(common_1.HttpStatus.OK).json({
                message: " user Found Succesfully",
                status: common_1.HttpStatus.OK,
                data: existinguser
            });
        }
        catch (err) {
            return Response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
    async deleteuser(Response, userId) {
        try {
            const deleteuser = await this.userService.deleteuser(userId);
            return Response.status(common_1.HttpStatus.OK).json({
                message: " user Deleted Succesfully",
                status: common_1.HttpStatus.OK,
                data: deleteuser
            });
        }
        catch (err) {
            return Response.status(err.status).json({
                message: err.response,
                status: common_1.HttpStatus.BAD_REQUEST,
                data: null
            });
        }
    }
};
exports.userController = userController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "createuser", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], userController.prototype, "updateuser", null);
__decorate([
    (0, common_1.Get)("/getbyusername"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("username")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "findbyusername", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], userController.prototype, "getusers", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "getuser", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], userController.prototype, "deleteuser", null);
exports.userController = userController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.userService])
], userController);
//# sourceMappingURL=user.controller.js.map