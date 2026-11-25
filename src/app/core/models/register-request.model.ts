export interface Address {
  division: string;
  district: string;
  area: string;
  street: string;
  postalCode: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: Address;
}
