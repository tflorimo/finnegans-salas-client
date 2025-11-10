interface AuthTokens {
  access_token: string;
  refresh_token: string;
  expiry_date: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  picture: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user: AuthUser;
  appToken: string;
  tokens: AuthTokens;
  next: string;
}