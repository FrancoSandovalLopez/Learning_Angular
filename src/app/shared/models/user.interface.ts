export interface User {
    email: string;
    password: string;
}

export interface UserResponse {
    id: number;
    run: number;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    token: string;
    valid: boolean;
    profile: number;
}
