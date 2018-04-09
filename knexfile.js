'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/hey-good-news'
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
