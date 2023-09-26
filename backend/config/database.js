module.exports = ({ env }) => ({
  defaultConnection: env('DATABASE_CONNECT', 'default'),
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {},
    },
  },
});
