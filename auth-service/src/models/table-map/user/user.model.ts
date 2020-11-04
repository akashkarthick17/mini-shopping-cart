import { UserType } from '../../user-type.model';

export interface Id {
  id: string;
}

export interface Password {
  password?: string;
}

export interface CreatedAt {
  createdAt: string;
}

export interface User extends Id, Password, CreatedAt {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  userType: UserType;
}
