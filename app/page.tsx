import { Anchor, Container, Text, Title } from '@mantine/core';

export default function HomePage() {
  return (
    <Container fluid mt="xl">
      <Title order={1} textWrap="wrap" ff="monospace" ta="center" mb="lg">
        solving football
      </Title>
      <Text ta="center" size="xl">
        A modest attempt to document, analyse and solve the sport of association football
      </Text>
      <Text ta="center" mt="xl" size="lg">
        <Anchor fw={500} underline="always" href="/teams">
          Teams
        </Anchor>{' '}
        | People | Competitions | Statistics |{' '}
        <Anchor fw={500} underline="always" href="/posts">
          Posts
        </Anchor>
      </Text>
      <Text ta="center" mt="xl" size="lg">
        <Anchor fw={500} underline="always" href="https://storybook.solving.football">
          Storybook components
        </Anchor>{' '}
        |{' '}
        <Anchor fw={500} underline="always" href="https://github.com/jonathan-bull/sportdb-react">
          GitHub repository
        </Anchor>
      </Text>
    </Container>
  );
}
