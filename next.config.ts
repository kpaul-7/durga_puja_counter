/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  // images: { unoptimized: true }, // Uncomment if using Next.js <Image /> component for static export
  basePath: '/durga_puja_counter', 
  assetPrefix: "/durga_puja_counter",
};

export default nextConfig;