/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
  },
  images: {
      domains: ['localhost','pitaku-marketing-alpha.vercel.app'],
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
