import AppError from "../../helpers/appError.js";
import userRepository from "./user.repository.js";

import {v4 as uuidV4 } from "uuid"

const createUserService = async (data) => {
    const id = uuidV4();
    data.id = id;
    const exists = await userRepository.findUserByUsername(data.username);
    if(exists){
        throw new AppError("register failed", 400, [{reason:"register failed"}])
    }
    return await userRepository.createUser(data)
}

export default {createUserService}
