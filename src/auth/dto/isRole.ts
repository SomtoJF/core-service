import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export default function IsRole(validationOptions?: ValidationOptions) {
  return (object: Record<string, any>, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      validator: {
        validate(value, validationArguments) {
          const allowedRoles = ['student', 'examiner'];
          return allowedRoles.includes(value);
        },
      },
      ...validationOptions,
    });
  };
}
