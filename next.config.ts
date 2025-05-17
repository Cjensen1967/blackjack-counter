import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES_DEPLOY === 'true';

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export
  basePath: isGithubPages ? '/blackjack-counter' : '', // Set basePath for GitHub Pages
  images: {
    unoptimized: true, // Required for static export with Next.js Image component
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
