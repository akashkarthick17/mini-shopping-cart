import { Password, User } from '../table-map/user/user.model';

export class ValidateTokenResponse {
  user: Omit<User, keyof Password>;

  constructor(user: Omit<User, keyof Password>) {
    this.user = user;
  }
}