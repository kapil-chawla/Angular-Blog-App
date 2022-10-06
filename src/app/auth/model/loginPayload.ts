export class LoginRequest {
  username: string | undefined;
  password: string | undefined;
}

export class LoginResponse {
  username: string | undefined;
  authenticationToken: string | undefined;
}
