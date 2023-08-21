export interface ErrorService {
  error: {
    statusCode: number
    message: string
    error: string
  }
}

export interface RegistrationErrors {
  name?: string[]
  email?: string[]
  city_id?: string[]
  address?: string[]
  phone_number?: string[]
  password?: string[]
}
