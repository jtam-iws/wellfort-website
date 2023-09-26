module.exports = () => ({
  plugins: {
    navigation: {
      additionalFields: ['audience'],
      allowedLevels: 2,
      contentTypesNameFields: {
        'pages': ['title'],
      },
    },
  },
})
