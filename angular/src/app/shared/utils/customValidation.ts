import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').indexOf(' ') >= 0;
    return !isWhitespace ? null : { 'noSpaces': true };
  };
}
