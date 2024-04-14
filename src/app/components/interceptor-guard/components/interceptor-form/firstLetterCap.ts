import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function firstCharCapValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }

    const firstChar = value.charAt(0);
    if (firstChar !== firstChar.toUpperCase()) {
      return { notCapitalized: true };
    }
    return null;
  };
}
