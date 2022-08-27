import { getUsers } from './src/open-api/get-users';
export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'your description here',
    termsOfService: '',
    contact: {
      name: 'M. M. Fahim Hasnain',
      email: 'fahadfahim13@gmail.com',
      url: 'https://github.com/fahadfahim13',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Users',
    },
  ],
  paths: {
    '/auth/users': {
      get: getUsers,
    },
  },
  servers: [
    {
      url: 'http://localhost:4000/api/v1',
      description: 'Local server',
    },
    {
      url: 'https://your_production_url/api/v1',
      description: 'Production Env',
    },
  ],
};
