import { Container, Text, Title } from '@mantine/core';
import { QuickMenu } from '@/components/football/content/QuickMenu/QuickMenu';

export default function HomePage() {
  return (
    <Container fluid mt="xl">
      <Title order={1} textWrap="wrap" ff="monospace" ta="center" mb="lg">
        solving football
      </Title>
      <Text ta="center" size="xl">
        A modest attempt to document, analyse and solve the sport of association football
      </Text>
      <QuickMenu />
    </Container>
  );
}
