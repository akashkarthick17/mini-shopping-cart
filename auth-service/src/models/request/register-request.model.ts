import { CreatedAt, Id, User } from '../table-map/user/user.model';

export interface RegisterRequest extends
    Omit<User, keyof Id | keyof CreatedAt> {
}