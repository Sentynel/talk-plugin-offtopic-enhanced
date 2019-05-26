module.exports = {
  tags: [
    {
      name: 'OFF_TOPIC',
      permissions: {
        public: true,
        self: true,
        roles: ['MODERATOR', 'ADMIN'],
      },
      models: ['COMMENTS'],
      created_at: new Date(),
    },
  ],
};
