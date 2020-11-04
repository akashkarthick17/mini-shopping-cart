import sha from 'sha.js';
import { ErrorMessage } from '../constants/error.constants';

export class AppUtility {

  static snakeToCamelCase(str: string): string {
    return str.replace(
      /([-_][a-z0-9])/g,
      (group) => group.toUpperCase()
        .replace('-', '')
        .replace('_', '')
    );
  }

  static mapTableToObject<T>(table: Object): T {
    try {
      if (table instanceof Object) {
        const object = {};
        for (const property in table) {
          object[AppUtility.snakeToCamelCase(property)] = table[property];
        }
        return object as T;
      } else {
        throw ErrorMessage.ERROR_MAPPING_TABLE;
      }
    }
    catch (error) {
      throw ErrorMessage.ERROR_MAPPING_TABLE;
    };
  }

  static getPasswordHash(password: string): string {
    return new sha.sha256().update(password).digest('hex');
  }
}