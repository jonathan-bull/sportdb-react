import { Container, Title } from '@mantine/core';

export function generateMetadata() {
  return {
    title: 'Teams - solving.football',
    description: 'Teams available in the database',
  };
}

export default function TeamsPage() {
  return (
    <>
      <Container w="100%">
        <Title mb="xl">Teams</Title>
      </Container>
    </>
  );
}
