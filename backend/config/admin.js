module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '794472af5520cbfd6b5c8d8375708a47'),
  },
});
