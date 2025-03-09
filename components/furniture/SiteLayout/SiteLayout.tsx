'use client';

import {
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Container,
  Flex,
  Stack,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '@/components/furniture/ColorSchemeToggle/ColorSchemeToggle';
import { SiteNav } from '@/components/furniture/SiteNav/SiteNav';
import classes from './SiteLayout.module.css';

type LayoutProps = {
  children?: React.ReactNode;
};

export function SiteLayout(props: LayoutProps) {
  const [opened, { toggle }] = useDisclosure();
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
        </Stack>
      </AppShellMain>
    </AppShell>
  );
}
