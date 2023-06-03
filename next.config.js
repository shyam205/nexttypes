/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images : {
    // domains : ["rackandmortyapi.com"],
    //  hostname : ['rickandmortyapi.com'],
    // path:'/'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com',
        port: '',
        pathname: '/',
      }
    ],
  }
}

module.exports = nextConfig
