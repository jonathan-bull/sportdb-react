'use client';

import {
  createTheme,
  CSSVariablesResolver,
  rem,
  SegmentedControl,
  Select,
  virtualColor,
} from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  autoContrast: true,
  colors: {
    customGreen: [
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
      '#00dfb4',
    ],
    customBlue: [
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
      '#0b107f',
    ],
    primary: virtualColor({
      name: 'primary',
      dark: 'customBlue',
      light: 'customGreen',
    }),
    dark: virtualColor({
      name: 'dark',
      dark: 'customGreen',
      light: 'customBlue',
    }),
    gray: virtualColor({
      name: 'primary',
      dark: 'customGreen',
      light: 'customBlue',
    }),
  },
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
  },
  headings: {
    sizes: {
      h1: { fontSize: rem(44) },
      h2: { fontSize: rem(40) },
      h3: { fontSize: rem(36) },
      h4: { fontSize: rem(32) },
      h5: { fontSize: rem(28) },
    },
  },
  spacing: {
    xs: rem(18),
    sm: rem(22),
    md: rem(28),
    lg: rem(34),
    xl: rem(40),
  },
  components: {
    Select: Select.extend({
      vars: () => {
        return {
          input: {
            '--input-bg': 'transparent',
            '--input-bd': 'var(--mantine-color-white)',
          },
          dropdown: {
            '--popover-border-color': 'var(--mantine-color-white)',
            backgroundColor: 'var(--mantine-color-black)',
          },
        };
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      vars: () => {
        return {
          root: {
            '--sc-color': 'var(--mantine-color-white)',
            backgroundColor: 'transparent',
          },
          label: {
            '--sc-color': 'var(--mantine-color-black)',
          },
        };
      },
    }),
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-hero-height': theme.other.heroHeight,
  },
  light: {
    '--mantine-color-dimmed': theme.colors.customBlue[0],
    '--mantine-color-anchor': theme.colors.customBlue[0],
    '--mantine-color-default-border': theme.colors.customBlue[0],
    '--mantine-color-text': theme.colors.customBlue[0],
    '--mantine-color-white': theme.colors.customBlue[0],
    '--mantine-color-black': theme.colors.customGreen[0],
    '--mantine-color-body': theme.colors.customGreen[0],
    '--code-bg': theme.colors.customBlue[0],
    '--tooltip-bg': theme.colors.customBlue[0],
    '--tooltip-color': theme.colors.customGreen[0],
  },
  dark: {
    '--mantine-color-dimmed': theme.colors.customGreen[0],
    '--mantine-color-anchor': theme.colors.customGreen[0],
    '--mantine-color-default-border': theme.colors.customGreen[0],
    '--mantine-color-text': theme.colors.customGreen[0],
    '--mantine-color-white': theme.colors.customGreen[0],
    '--mantine-color-black': theme.colors.customBlue[0],
    '--mantine-color-body': theme.colors.customBlue[0],
    '--code-bg': theme.colors.customGreen[0],
    '--switch-thumb-bg': theme.colors.customBlue[0],
    '--tooltip-bg': theme.colors.customGreen[0],
    '--tooltip-color': theme.colors.customBlue[0],
  },
});
