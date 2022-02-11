import { AuthenticationDto } from '../dto/AuthenticationDto';

export interface IAuthenticationService {
  authenticate(credential: AuthenticationDto): Promise<any>;
}
