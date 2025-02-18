import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'instagram.flos5-2.fna.fbcdn.net',
    ],
  },
  i18n: {
    locales: ['en', 'es'], // Add your supported locales here
    defaultLocale: 'en', // Set your default locale
  },
};

// Export the configuration with the Next Intl plugin
export default withNextIntl(nextConfig);