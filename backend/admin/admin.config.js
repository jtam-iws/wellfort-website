module.exports = {
	webpack: (config, webpack) => {
		// Note: we provide webpack above so you should not `require` it
		// Perform customizations to webpack config
		// Important: return the modified config

		config.plugins.push(
			new webpack.DefinePlugin({
				CLIENT_URL: JSON.stringify(process.env.CLIENT_URL || 'http://localhost:8000'),
				GATSBY_BUILD_WEBHOOK: JSON.stringify(process.env.GATSBY_BUILD_WEBHOOK || 'http://localhost:8000'),
				GATSBY_PREVIEW_WEBHOOK: JSON.stringify(process.env.GATSBY_PREVIEW_WEBHOOK || 'http://localhost:8000'),
			}),
		);

		return config;
	},
};
