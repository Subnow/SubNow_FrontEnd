import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export function phoneWithoutCode(text:string){
  let phoneNumber = text;
  let firstSpaceIndex = phoneNumber.indexOf(' '); // Finds the index of the first space
  return  phoneNumber.substring(firstSpaceIndex + 1); // Gets the substring after the first space
}


export function convertIsoToDateStruct(dateStr: string): NgbDateStruct {
  const date = new Date(dateStr);
  return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
}

