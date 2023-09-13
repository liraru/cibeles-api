export class DateUtils {
  public static DateToYYYYMMDD(date: Date): string {
    return `${date.getFullYear}-${date.getMonth()}-${date.getDate()}`;
  }
}
