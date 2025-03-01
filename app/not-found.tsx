import { Container, Text, Title } from '@mantine/core';

export default function NotFound() {
  return (
    <Container mt="xl">
      <Title ta="center" mb="lg">
        404 - not found
      </Title>
      <Text ta="center" size="xl">
        No page was found at this address
      </Text>
    </Container>
  );
}
