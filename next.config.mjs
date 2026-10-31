/** @type {import("next").NextConfig} */
const config = {
	poweredByHeader: false,
	reactStrictMode: true,
	trailingSlash: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	experimental: {
		inlineCss: true,
	},
	images: {
		qualities: [75, 100],
	},
	async redirects() {
		return [
			{
				source: "/en/(.*)",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default config;
