/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["github.com"],
    formats: ["image/webp"]
  },
  //! ***DEBUGAR O VALOR DA CHAVE use O MÓDULO NÃO ESTÁ SENDO ENCONTARDO*** //
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
};

module.exports = nextConfig;