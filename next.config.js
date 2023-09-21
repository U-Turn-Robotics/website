/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  ...(process.env.BASE_PATH && { basePath: process.env.BASE_PATH }),
};

module.exports = nextConfig;
