export const errorHandle = (err,req,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message =  err.message || 'internal server Error';
    const errors = err.errors || [];

    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
        errors
    })
}