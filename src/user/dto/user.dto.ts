import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import IsRole from './isRole';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsRole({ message: 'role must either be student or examiner' })
  role: 'student' | 'examiner';
}
