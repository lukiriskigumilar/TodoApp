import AppError from "../helpers/appError.js";

const reqBodyValidator = (schema) => {
    return (req,res,next) => {
        const contentType = req.headers['content-type'];
        if(!contentType|| !contentType.includes('application/json')){
        return next(
           new AppError("Unsupported Media Type. Please use application/json", 415, [])
         )
        }

        const {error} = schema.validate(req.body, {abortEarly: false});
        if(error){
            const errors = error.details.map(detail => detail.message)
          return next(
                new AppError(
                "validation errors",
                400,
                errors
            )
            )
        }
        next()
    }   
}

export default reqBodyValidator