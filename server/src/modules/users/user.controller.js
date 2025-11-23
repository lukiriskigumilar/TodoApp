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

export default {userRegisterController}