
export class DateTimeUtility {

  static getCurrentTimestamp = (): string => {
    const toTwoDigits = (timeMetric: number) => (
      timeMetric.toString().length === 1 ? '0' + timeMetric : timeMetric.toString());

    const dateObj = new Date();
    const date = `${dateObj.getFullYear()}-${toTwoDigits(dateObj.getMonth() + 1)}-${toTwoDigits(dateObj.getDate())}`;
    const time = `${toTwoDigits(dateObj.getHours())}:${toTwoDigits(dateObj.getMinutes())}:${toTwoDigits(dateObj.getSeconds())}`;
    return `${date} ${time}`;
  }
}