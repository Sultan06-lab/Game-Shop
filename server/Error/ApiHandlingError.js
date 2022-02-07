class ApiHandlingError extends Error {
    constructor(status, message){
        this.status = status;
        this.message = message;
    }

    // Not Found
    static badRequest(message) {
        return new ApiHandlingError(404, message)
    } 

    // Internal server error
    static internalError(message) {
        return new ApiHandlingError(404, message)
    }

    //Forbidden error
    static forbidden(message) {
        return new ApiHandlingError(403, message)
    }

}

module.exports = ApiHandlingError;