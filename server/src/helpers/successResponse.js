sendSuccessResponse = (res,message, data =[], statusCode = 200, pagination=null ) => {
    const responseData = {
        success: true,
        statusCode,
        message,
        data,
    }
    if(pagination){
        responseData.pagination = pagination;
    }
    return res.status(statusCode).json(responseData);
}

export default sendSuccessResponse;