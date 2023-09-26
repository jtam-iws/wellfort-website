module.exports = {
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'wellfort-strapi-storage',
      publicFiles: true,
      uniform: true,
      basePath: '',
    },
  },
}
