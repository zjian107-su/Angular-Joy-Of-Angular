import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function firstLetterCapitalized(): ValidatorFn {
  // return anonmous function
  return (control: AbstractControl): ValidationErrors | null => {
    const firstLetter = control.value.charAt(0);

    if (firstLetter && firstLetter !== firstLetter.toUpperCase()) {
      return { firstLetterCapitalized: true };
    }

    return null;
  };
}
