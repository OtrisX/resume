/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/front",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
