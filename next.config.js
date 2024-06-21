/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
  images: {
      domains: ['localhost'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: process.env.IMAGE_URL,
          port: '',
          pathname: '/**',
        },
      ],
    },   
}

module.exports = nextConfig
