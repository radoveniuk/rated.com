import { round } from './common';

export function modificateInputValue (modificator: any, value: any) {
  let updatedValue = value;
  switch (modificator.type) {
    case 'min':
      updatedValue = !!value && parseFloat(value) < modificator.val ? modificator.val.toString() : value;
      break;
    case 'max':
      updatedValue = !!value && parseFloat(value) > modificator.val ? modificator.val.toString() : value;
      break;
    case 'int':
      updatedValue = value ? parseInt(value, 10).toString() : value;
      break;
    case 'floatRound':
      updatedValue = value ? round(parseFloat(value), modificator.val).toString() : value;
      break;
    case 'float':
      updatedValue = value ? parseFloat(value).toString() : value;
      break;
    default:
      break;
  }

  return updatedValue;
}
