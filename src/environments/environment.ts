// environment.ts

export const base = {
  baseUrl: 'https://pre.api.lcareyourspets.duckdns.org',
  user: '/nestjs',
  veterinary: '/drf',
}
export const environment = {
  production: false,
  baseUrl: 'https://pre.api.lcareyourspets.duckdns.org',

  ENDPOINTS: {
    USER: {
      SIGN_IN: `${base.baseUrl}${base.user}/auth/signin`,
      SIGN_UP: `${base.baseUrl}${base.user}/user`,
      LOGOUT: `${base.baseUrl}${base.user}/auth/logout`,
      REFRESH_TOKEN: `${base.baseUrl}${base.user}/auth/refresh`,
      CREATE_PET: `${base.baseUrl}${base.user}/pet`,
    },
    VETERINARY: {
      LIST: `${base.baseUrl}${base.veterinary}/veterinaries`,
      LOGIN: `${base.baseUrl}${base.veterinary}/auth/signin`,
      CREATE: `${base.baseUrl}${base.veterinary}/veterinary`,
    },
  },
}
