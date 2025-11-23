import userService from "./user.service.js";
import sendSuccessResponse from "../../helpers/successResponse.js";
const userRegisterController = async (req,res,next) =>{
    const data = req.body;

    try {
        const result = await userService.createUserService(data);
        sendSuccessResponse(res,"Register successfully", result,200,null)
    } catch (error) {
        next(error);
    }
}

const identifyUserController = async (req,res,next) =>{
    const {username} = req.body;

    try {
        const user = await userService.identifyUserService(username);
        sendSuccessResponse(res,'identify successfully', user, 200, null)
    } catch (error) {
        next(error);
    }
}

export default {userRegisterController, identifyUserController}