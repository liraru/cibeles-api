export const REGEX = { YYYYMMDD: /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/ };

export class StringUtils {
  static trimPlainObject(value: any): any {
    if (value) {
      Object.keys(value).forEach((el) => {
        if (typeof value[el] === `string`) {
          value[el] = value[el].trim();
        }
        // TODO :: Make recursive
        // if (!value[el].isArray()) {
        //   if (typeof value[el] === `string`) {
        //     value[el] = value[el].trim();
        //   }
        // } else {
        //   StringUtils.trimObject(value[el]);
        // }
      });
    }
    return value;
  }
}
