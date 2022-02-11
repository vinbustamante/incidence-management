import { Injectable } from '@nestjs/common';
import { AuthenticationDto } from './dto/AuthenticationDto';
import { IAuthenticationService } from './interface/IAuthenticationService';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  authenticate(credential: AuthenticationDto): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
