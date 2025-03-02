import '@mantine/core/styles.css';

import React from 'react';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
  Stack,
} from '@mantine/core';
import { SiteHeader } from '@/components/furniture/SiteHeader/SiteHeader';
import { resolver, theme } from '../theme';
import classes from './layout.module.css';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <AppShell>
            <AppShellHeader className="app__header" withBorder={false} bg="white" c="black">
              <SiteHeader />
            </AppShellHeader>
            <AppShellMain className={classes.main}>
              <Stack align="stretch" justify="flex-start" gap="md">
                {children}
              </Stack>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
