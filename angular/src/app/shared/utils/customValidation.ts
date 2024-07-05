import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').indexOf(' ') >= 0;
    return !isWhitespace ? null : { 'noSpaces': true };
  };
}

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const valid = urlPattern.test(control.value);
    return valid ? null : { invalidUrl: true };
  };
}



export function startDateValidator(expiryDateControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startDate = control.value;
    const expiryDate = expiryDateControl.value;

    if (!startDate || !expiryDate) {
      return null; // return if either date is not provided
    }

    const startDateValid = new Date(startDate) <= new Date(expiryDate);

    return startDateValid ? null : { startDateInvalid: true };
  };
}

export function expiryDateValidator(startDateControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const startDate = startDateControl.value;
    const expiryDate = control.value;

    if (!startDate || !expiryDate) {
      return null; // return if either date is not provided
    }

    const expiryDateValid = new Date(expiryDate) >= new Date(startDate);

    return expiryDateValid ? null : { expiryDateInvalid: true };
  };
}



