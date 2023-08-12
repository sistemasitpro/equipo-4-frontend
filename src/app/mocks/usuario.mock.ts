/* eslint-disable prettier/prettier */
import { CreateUserRq, LoginRq } from '../interfaces/user.interface'

export const LOGIN_USER: LoginRq = {
  email: 'correo@correo.com',
  password: '123456',
}

export const CREATE_USER: CreateUserRq ={
    name: 'Alfredo',
    email: 'alfredo@correo.es',
    phone_number: '123456789',
    address: 'Calle 123',
    password: '123456',
    city_id: 1,
}
