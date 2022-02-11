import { AuthenticationDto } from '../dto/AuthenticationDto';
import { AuthenticationResponseDto } from '../dto/AuthenticationResponseDto';

export interface IAuthenticationService {
  authenticate(
    credential: AuthenticationDto,
  ): Promise<AuthenticationResponseDto>;
}
