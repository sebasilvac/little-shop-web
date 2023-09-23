/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
    }
  ]
  },
  env: {
    API_URL_BASE: process.env.API_URL_BASE,
  },
}

module.exports = nextConfig
