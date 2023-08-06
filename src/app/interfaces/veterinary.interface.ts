export interface Veterinary {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  description: string;
  services: Services[];
}

export interface Services {
  id: number;
  name: string;
  description: string;
}