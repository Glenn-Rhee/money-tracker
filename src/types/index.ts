export interface ResponsePayload<T = unknown> {
  status: "success" | "failed";
  message: string;
  statusCode: number;
  data?: T;
}

export interface CreateUser {
  fullName: string;
  email: string;
  mobileNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}

export interface LoginUser {
  email: string;
  password: string;
}
