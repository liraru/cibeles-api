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
