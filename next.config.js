/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  trailingSlash: false,
  async redirects() {
    return [
      // Redirect www to non-www for all paths
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.flycensed.com',
          },
        ],
        destination: 'https://flycensed.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
