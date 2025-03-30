/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      SETLIST_API_KEY: process.env.SETLIST_API_KEY
    }
  };
  
  module.exports = nextConfig;
  