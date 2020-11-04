import { readFileSync } from 'fs';

export class SQLQueries {
  public static LOGIN = readFileSync(__dirname + '/../sql/login.sql').toString();

  public static REGISTER = readFileSync(__dirname + '/../sql/register.sql').toString();

  public static GET_USER_BY_EMAIL = readFileSync(__dirname + '/../sql/get-user-by-email.sql').toString();

  public static GET_USER_BY_ID = readFileSync(__dirname + '/../sql/get-user-by-id.sql').toString();
}