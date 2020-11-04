import 'reflect-metadata';
import { Inject, Service } from 'typedi';
import { ErrorMessage } from '../constants/error.constants';
import { LoginRequest } from '../models/request/login-request.model';
import { RegisterRequest } from '../models/request/register-request.model';
import { LoginResponse } from '../models/response/login-response.model';
import { RegisterResponse } from '../models/response/register-response.model';
import { ValidateTokenResponse } from '../models/response/validate-token-response.model';
import { User } from '../models/table-map/user/user.model';
import { AuthRepository } from '../repositories/auth.repository';
import { JwtUtility } from '../utils/token.utility';


@Service('auth.delegate')
export class AuthDelegate {

    constructor(@Inject('auth.repository') private authRepository: AuthRepository) { }

    async login(body: LoginRequest): Promise<LoginResponse> {
        try {
            const { email, password } = body;
            const user: User = await this.authRepository.login(email, password);

            if (user) {
                // Generate JWT Token
                const token = JwtUtility.generateToken(user.id, user.email, user.userType);
                return new LoginResponse(user, token);
            } else {
                throw ErrorMessage.INVALID_CREDENTIALS;
            }
        } catch (error) {
            throw error;
        }
    }

    async validateToken(authorizationHeader: string): Promise<ValidateTokenResponse> {
        try {
            if (authorizationHeader) {
                const token = JwtUtility.getJwtTokenFromHeader(authorizationHeader);

                const isValidToken = await JwtUtility.isValidToken(token);

                if (isValidToken) {
                    const userId: string = JwtUtility.getUserIdFromToken(token);
                    const user: User = await this.authRepository.getUserById(userId);
                    return new ValidateTokenResponse(user);
                } else {
                    throw ErrorMessage.INVALID_TOKEN;
                }
            } else {
                throw ErrorMessage.INVALID_TOKEN;
            }
        } catch (error) {
            throw error;
        }
    }

    async register(body: RegisterRequest) {
        try {
            const { email } = body;
            const user: User = await this.authRepository.getUserByEmail(email);
            if (user) {
                if (user.email === email) {
                    throw ErrorMessage.USER_EXISTS;
                }
            }
            const registeredUser: User = await this.authRepository.register(body);

            // Generate JWT Token
            const token = JwtUtility.generateToken(registeredUser.id, registeredUser.email, registeredUser.userType);
            const registrationResponse = new RegisterResponse(registeredUser, token);
            return registrationResponse;

        } catch (error) {
            throw error;
        }
    }
}