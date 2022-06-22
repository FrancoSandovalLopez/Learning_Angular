export interface User {
    email: string;
    password: string;
    id_role: number;
}


export interface UserResponse{
  email: string;
  token: string;
  id_role: number;
  id_client: number;
}
