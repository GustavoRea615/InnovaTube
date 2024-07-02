export class GlobalUtils {

  static validateUndefinedOrNull(toValidate: any): boolean {
    return toValidate == null;
  }
  static validateNotUndefinedAndNull(toValidate: any): boolean {
    return toValidate != null;
  }

  static validateEmptyObject(toValidate: any): boolean {
    return Object.keys(toValidate).length === 0;
  }

  static validateNotEmptyObject(toValidate: any): boolean {
    return !GlobalUtils.validateEmptyObject(toValidate);
  }

  static validateSameObjectKeys(a: any, b: any): boolean {
    if (GlobalUtils.validateUndefinedOrNull(a) || GlobalUtils.validateUndefinedOrNull(b)) { return false };
    return JSON.stringify(Object.keys(a).sort()) === JSON.stringify(Object.keys(b).sort());
  }

  static validateEqualsData(a: any, b: any): boolean {
    if (GlobalUtils.validateUndefinedOrNull(a) || GlobalUtils.validateUndefinedOrNull(b)) { return false };
    return JSON.stringify(Object.values(a).sort()) === JSON.stringify(Object.values(b).sort());
  }

  static validateSimpleChangesValues(changes: any): boolean {
    return changes && !GlobalUtils.validateEqualsData(changes.previousValue, changes.currentValue);
  }
  
}
