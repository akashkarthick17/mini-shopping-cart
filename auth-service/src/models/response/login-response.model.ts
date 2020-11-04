import { Password, User } from '../table-map/user/user.model';

export class LoginResponse {
    user: Omit<User, keyof Password>;
    token: string;

    constructor(user: Omit<User, keyof Password>, token: string) {
        this.user = user;
        this.token = token;
    }
}