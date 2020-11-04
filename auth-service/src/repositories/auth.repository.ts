import { Inject, Service } from 'typedi';
import { v4 as uuid4 } from 'uuid';
import { ErrorMessage } from '../constants/error.constants';
import { SQLQueries } from '../constants/sql-queries.constants';
import { RegisterRequest } from '../models/request/register-request.model';
import { User } from '../models/table-map/user/user.model';
import { UserType } from '../models/user-type.model';
import { AppUtility } from '../utils/app-utility';
import { DateTimeUtility } from '../utils/date-time.utility';
import { MySQLClient } from '../utils/db.utility';

@Service('auth.repository')
export class AuthRepository {

  constructor(@Inject('mysql.client') private mySQLClient: MySQLClient) { }

  async login(email: string, password: string): Promise<User> {
    try {
      const hashedPassword = AppUtility.getPasswordHash(password);
      const users: any[] = await this.mySQLClient.executeQuery(SQLQueries.LOGIN, [email, hashedPassword]);
      if (users.length === 1) {
        return AppUtility.mapTableToObject<User>(users[0]);
      } else {
        throw ErrorMessage.INVALID_USER;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserByEmail(email: string): Promise<User> {
    try {
      const users: any[] = await this.mySQLClient.executeQuery(SQLQueries.GET_USER_BY_EMAIL, [email]);
      if (users.length !== 0) {
        return AppUtility.mapTableToObject<User>(users[0]);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async getUserById(id: string): Promise<User> {
    try {
      const users: any[] = await this.mySQLClient.executeQuery(SQLQueries.GET_USER_BY_ID, [id]);
      if (users.length !== 0) {
        return AppUtility.mapTableToObject<User>(users[0]);
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  async register(registerBody: RegisterRequest): Promise<User> {
    const { email, password, firstName, lastName, phoneNumber } = registerBody;
    const userId: string = uuid4();
    const hashedPassword = AppUtility.getPasswordHash(password);
    const createdAt = DateTimeUtility.getCurrentTimestamp();
    const userType = UserType.CUSTOMER;
    const result = await this.mySQLClient.executeQuery(SQLQueries.REGISTER,
      [userId, email, hashedPassword, firstName, lastName, phoneNumber, userType, createdAt]);

    if (result?.affectedRows > 0) {
      return {
        id: userId,
        email,
        firstName,
        lastName,
        userType,
        createdAt,
        phoneNumber,
      };
    } else {
      throw ErrorMessage.USER_NOT_REGISTERED;
    }
  }

}