export interface LoginSchema {
  userName: string;
  password: string;
}

export interface LoginRes {
  userId: number;
  userName: string;
  accessToken: string;
  refreshToken: string;
  permissions: null;
}
