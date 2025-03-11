import '@mantine/core/styles.css';
import './layout.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { SiteLayout } from '@/components/furniture/SiteLayout/SiteLayout';
import { resolver, theme } from '../theme';

export const metadata = {
  title: 'solving.football',
  description: 'A modest attempt to document, analyse and solve the sport of association football',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto" theme={theme} cssVariablesResolver={resolver}>
          <SiteLayout>{children}</SiteLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
