import { Container, Title } from '@mantine/core';

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;

  return (
    <>
      <Container w="100%">
        <Title mb="xl">Single team - {id}</Title>
      </Container>
    </>
  );
}
