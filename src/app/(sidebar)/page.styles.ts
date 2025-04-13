import type { SxProps } from '@hxnova/themes';

/**
 * The `SxProps` can be either object or function.
 * For more details, please refer to https://github.com/mui/pigment-css?tab=readme-ov-file#sx-prop
 */
export const styles: { [key: string]: SxProps } = {
  navigationTop: {
    paddingInline: 0,
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '16px',
    paddingBlock: '24px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '16px',
    justifyContent: 'center',
    gridAutoFlow: 'dense',
    transition: 'grid-template-columns 0.4s ease-in-out',
  },
};
