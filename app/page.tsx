import { Anchor, Container, Text, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Container mt="xl">
      <Title ta="center" mb="lg">
        solving.football
      </Title>
      <Text ta="center" size="xl">
        A modest attempt to document, analyse and solve the sport of association football
      </Text>
      <Text ta="center" mt="xl" size="lg">
        Teams | People | Competitions | Statistics | <Anchor href="/posts">Posts</Anchor>
      </Text>
    </Container>
  );
}
