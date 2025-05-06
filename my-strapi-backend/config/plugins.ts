module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        jwt: {
          expiresIn: '7d', // Set token expiration (e.g., 7 days)
        },
      },
    },
  });