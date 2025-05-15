'use client';

import {
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  BackgroundImage,
  Burger,
  Container,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/furniture/ColorSchemeToggle/ColorSchemeToggle';
import { SiteNav } from '@/components/furniture/SiteNav/SiteNav';
import { getImageByID } from '@/helpers/football/imageByID';
import classes from './SiteLayout.module.css';

type LayoutProps = {
  children?: React.ReactNode;
};

export function SiteLayout(props: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();
  /** This will be dynamic one day. That day is not today. */
  const backgroundImg = getImageByID(
    '5005130',
    'venues/inside',
    process.env.NEXT_PUBLIC_ASSET_URL ?? '',
    'jpg'
  );
  const { children } = props;

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
    >
      <AppShellHeader withBorder={false} bg="white" c="black">
        <Container w="100%" mt="xs" mb="xs">
          <Flex justify="space-between" align="center">
            <Burger color="black" opened={opened} onClick={toggle} aria-label="Toggle navigation" />
            <Text className={classes.title} size="sm">
              <Anchor c="black" href="/">
                solving football
              </Anchor>
            </Text>
            <ColorSchemeToggle />
          </Flex>
        </Container>
      </AppShellHeader>
      <AppShellNavbar className={classes.navbar}>
        <SiteNav />
      </AppShellNavbar>
      <AppShellMain>
        <Stack align="stretch" justify="flex-start" gap="md">
          {children}
          <BackgroundImage src={backgroundImg} />
        </Stack>
      </AppShellMain>
    </AppShell>
  );
}
