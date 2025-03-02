import { Anchor, Container, Flex, Text } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export function SiteHeader() {
  return (
    <Container w="100%" mt="xs" mb="xs">
      <Flex justify="space-between">
        <Text size="lg">
          <Anchor c="black" href="/">
            Solving Football
          </Anchor>
        </Text>
        <ColorSchemeToggle />
      </Flex>
    </Container>
  );
}
