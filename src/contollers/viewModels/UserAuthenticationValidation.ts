import { IsString, IsNotEmpty } from 'class-validator';

export class UserAuthenticationValidation {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
