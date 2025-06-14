import { ListPage } from '@/components/football/content/ListPage/ListPage';
import { searchParamsProp } from '@/types/display/Content';

export function generateMetadata() {
  return {
    title: 'Teams - solving.football',
    description: 'Teams available in the database',
  };
}

export default async function TeamsPage({ searchParams }: { searchParams: searchParamsProp }) {
  const { page = '1' } = await searchParams;
  return (
    <ListPage
      apiKey="teams"
      apiSlug="/teams"
      pageTitle="Teams"
      pageSlug="teams"
      currentPage={page}
    />
  );
}
