const isProd = process.env.NODE_ENV === 'production'

/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  // reactStrictMode: true,
  swcMinify: true
})

module.export = nextConfig
