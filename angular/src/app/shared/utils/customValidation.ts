import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noSpacesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').indexOf(' ') >= 0;
    return !isWhitespace ? null : { 'noSpaces': true };
  };
}

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null; // Don't validate empty values to allow optional fields
    }

    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    const valid = urlPattern.test(control.value);
    return valid ? null : { invalidUrl: { value: control.value } };
  };
}

export function whatsappNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null; // Don't validate empty values to allow optional fields
    }

    const pattern = /^\+[1-9]\d{1,14}$/; // E.164 format: + followed by country code and number
    const valid = pattern.test(control.value);
    return valid ? null : { invalidWhatsappNumber: { value: control.value } };
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

export function fileValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value;
    if (file) {
      // const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
      // if (!validTypes.includes(file.type)) {
      //   return { invalidFileType: 'Invalid file type. Only SVG, PNG, JPG, or GIF are allowed.' };
      // }

      const img = new Image();
      img.src = window.URL.createObjectURL(file);

      return new Promise((resolve) => {
        img.onload = () => {
          window.URL.revokeObjectURL(img.src);

          if (img.width > 512 || img.height > 512) {
            resolve({ invalidFileDimensions: 'Image dimensions should not exceed 512x512px.' });
          } else {
            resolve(null);
          }
        };
      });
    }
    return null;
  };
}



