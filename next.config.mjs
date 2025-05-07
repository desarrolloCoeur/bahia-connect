/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/es", // Default redirect page
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
