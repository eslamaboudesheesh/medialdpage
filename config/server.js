module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0/0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a1964b49b5d4d520f7ba12cd464e4888'),
    },
  },
});
