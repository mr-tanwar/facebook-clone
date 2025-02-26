import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config"; 

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  i18n: {
    defaultLocale: i18n.defaultLocale,
    locales: i18n.locales,
    localeDetection: false
  },
};

export default nextConfig;
