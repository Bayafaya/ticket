import withBundleAnalyzer from "@next/bundle-analyzer";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withNextIntl = createNextIntlPlugin({
  requestConfig: "./src/app/(my-app)/provider/i18nProvider/lib/request.ts",
});

const nextConfig: NextConfig = {
  images: {
    domains: [
      "istylemag.com",
      "levante-s3.s3.eu-north-1.amazonaws.com",
      "akela-prod-kg.s3.eu-north-1.amazonaws.com",
    ],
  },
  output: "standalone",
  reactStrictMode: true,
};

const withPlugins = (config: NextConfig) =>
  withPayload(withNextIntl(bundleAnalyzer(config)));

export default withPlugins(nextConfig);
