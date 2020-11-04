
export class AppError {
    errorCode: string;
    errorMessage: string;
    constructor(errorCode: string, errorMessage: string) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}


export class ErrorMessage {
    static get INTERNAL_SERVER_ERROR() {
        return new AppError('ERR_INTERNAL_SERVER', 'Internal server error.');
    }

    static get INVALID_CREDENTIALS() {
        return new AppError('INVALID_CREDENTIALS', 'Invalid username or password');
    }

    static get USER_EXISTS() {
        return new AppError('USER_EXISTS', 'User exists with this email');
    }

    static get INVALID_TOKEN() {
        return new AppError('INVALID_TOKEN', 'Invalid Token');
    }

    static get INVALID_BODY() {
        return new AppError('INVALID_BODY', 'Invalid Body');
    }

    static get USER_ALREADY_REGISTERED() {
        return new AppError('USER_ALREADY_REGISTERED', 'User already registered this tournament');
    }

    static get USER_NOT_REGISTERED() {
        return new AppError('USER_NOT_REGISTERED', 'User has not registered for this tournament');
    }

    static get INVALID_DETAILS() {
        return new AppError('INVALID_DETAILS', 'Invalid details');
    }

    static get FILE_LIMIT_EXCEEDED() {
        return new AppError('FILE_LIMIT_EXCEEDED', 'File limit exceeded');
    }

    static get INVALID_STATUS() {
        return new AppError('INVALID_STATUS', 'Invalid status');
    }

    static get INVALID_USER() {
        return new AppError('INVALID_USER', 'Invalid user');
    }

    static get ERROR_MAPPING_TABLE() {
        return new AppError('ERROR_MAPPING_TABLE', 'Error mapping table to object');
    }
}
