import type {} from '@pigment-css/react/theme';
import type { ExtendTheme } from '@pigment-css/react/theme';
import type { NovaPigmentTheme, SxProps } from '@hxnova/themes';

declare module '@pigment-css/react/theme' {
  interface ThemeTokens extends NovaPigmentTheme {}

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: 'light' | 'dark';
      tokens: ThemeTokens;
    }>;
  }
}

declare global {
  namespace React {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface HTMLAttributes<T> {
      sx?: SxProps;
    }
  }
}
