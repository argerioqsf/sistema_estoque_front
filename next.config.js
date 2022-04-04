/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
})

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:3333/:slug*'
      },
    ]
  },
}