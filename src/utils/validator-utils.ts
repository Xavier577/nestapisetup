import {
  validateSync,
  ValidationError,
  ValidatorOptions,
} from 'class-validator';
import { Constructor } from '@internal/types';
import { plainToInstance } from 'class-transformer';
import { merge, reduce, trim } from 'lodash';

const baseValidatorOptions: ValidatorOptions = {
  whitelist: true,
  stopAtFirstError: true,
};
export const validateDto = <T>(
  value: object,
  dtoClass: Constructor<T>,
  options: ValidatorOptions = {},
): T => {
  const object = plainToInstance(dtoClass, value);

  options = merge(baseValidatorOptions, options);

  const errors = validateSync(<object>object, options);

  if (errors.length > 0) {
    throw new DtoValidationError(errors);
  }

  return object;
};

export class DtoValidationError extends Error {
  readonly messages: { [key: string]: string } = {};

  constructor(errors: ValidationError[]) {
    super('validation error');

    this.messages = errors.reduce((accum, err) => {
      accum[err.property] = trim(
        reduce(
          err.constraints,
          (result, msg, _key) => {
            return result.concat(msg).concat(' ');
          },
          '',
        ),
      );

      return accum;
    }, {});
  }
}
