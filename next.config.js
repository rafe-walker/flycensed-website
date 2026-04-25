/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  trailingSlash: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
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
