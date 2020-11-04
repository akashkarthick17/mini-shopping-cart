
export class AppUtility {

  static getRowNumber(pageOffset: number, pageLimit: number): number {
    return (pageOffset - 1) * pageLimit;
  }

}