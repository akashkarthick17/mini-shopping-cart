
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

    static get TOKEN_NOT_FOUND() {
        return new AppError('TOKEN_NOT_FOUND', 'Token not found');
    }

    static get INVALID_REQUEST_INPUT() {
        return new AppError('INVALID_REQUEST_INPUT', 'Invalid Request Input');
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

    static get ERROR_UPDATING_CART() {
        return new AppError('ERROR_UPDATING_CART', 'Error updating the cart');
    }

    static get ERROR_DELETING_CART() {
        return new AppError('ERROR_DELETING_CART', 'Error deleting the cart');
    }

    static get ERROR_ADDING_TO_CART() {
        return new AppError('ERROR_ADDING_TO_CART', 'Error adding to the cart');
    }

    static get CART_ITEM_EXISTS() {
        return new AppError('CART_ITEM_EXISTS', 'Cart item exists');
    }

    static get INVALID_CART_QUANTITY() {
        return new AppError('INVALID_CART_QUANTITY', 'Invalid cart quantity');
    }

    static get INVALID_PRODUCT_ID() {
        return new AppError('INVALID_PRODUCT_ID', 'Invalid Product Id');
    }
}
