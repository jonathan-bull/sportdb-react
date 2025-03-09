import { Anchor, Burger, Container, Flex, Text } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/furniture/ColorSchemeToggle/ColorSchemeToggle';

export function SiteHeader() {
  return (
    <Container w="100%" mt="xs" mb="xs">
      <Flex justify="space-between">
        <Burger aria-label="Toggle navigation" />
        <Text size="lg">
          <Anchor c="black" href="/">
            solving.football
          </Anchor>
        </Text>
        <ColorSchemeToggle />
      </Flex>
    </Container>
  );
}
