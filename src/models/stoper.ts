export interface Round {
  seconds: number;
  decySeconds: number;
}

export interface User {
  userName: string;
  seconds: number;
  decySeconds: number;
}

export interface UserFromWeb {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface Support {
  url: string;
  text: string;
}
export interface UserResponse {
  data: UserFromWeb;
  support: Support;
}
