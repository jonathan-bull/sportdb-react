import { ListPage } from '@/components/football/content/ListPage/ListPage';
import { searchParamsProp } from '@/types/display/Content';

export function generateMetadata() {
  return {
    title: 'People - solving.football',
    description: 'People available in the database',
  };
}

export default async function PeoplePage({ searchParams }: { searchParams: searchParamsProp }) {
  const { page = '1' } = await searchParams;
  return (
    <ListPage
      apiKey="people"
      apiSlug="/people"
      pageTitle="People"
      pageSlug="people"
      currentPage={page}
    />
  );
}
