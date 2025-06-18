export class LoginResponseModel {
    token: string = '';
    refreshToken: string = '';
    refreshTokenExpires: Date = new Date();
}