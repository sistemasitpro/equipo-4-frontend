/* eslint-disable prettier/prettier */
export interface LoginRq {
  email: string
  password: string
}

export interface LoginResp {
  accessToken: string
  refreshToken: string
  name: string
  uuid: string
}

export interface CreateUserRq {
  name: string
  email: string
  phone_number: string
  address: string
  password: string
  city_id: number
}

export interface CreateUserResp {
  message: string
}
