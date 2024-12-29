import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(credentials: { email: string; password: string }) {
        // Authentication logic (mocked for now)
        return { message: 'Login successful', credentials };
      }
}
