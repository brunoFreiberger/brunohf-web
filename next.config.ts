import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/api/resumes/*': ['./content/resumes/**/*.pdf'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
