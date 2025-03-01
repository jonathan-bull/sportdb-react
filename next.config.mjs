import bundleAnalyzer from '@next/bundle-analyzer';
import createMDX from '@next/mdx';
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
};

const withMDX = createMDX( {
  extension: /\.mdx$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter]
  }
} );

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withMDX( withBundleAnalyzer( nextConfig ) );
