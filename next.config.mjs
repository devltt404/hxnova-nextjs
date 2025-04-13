import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin';
import { NovaTheme } from '@hxnova/themes';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  theme: extendTheme(NovaTheme),
  transformLibraries: ['@hxnova/react-components'],
});
