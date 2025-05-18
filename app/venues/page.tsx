import { ListPage } from '@/components/football/content/ListPage/ListPage';
import { searchParamsProp } from '@/types/display/Content';

export function generateMetadata() {
  return {
    title: 'Venues - solving.football',
    description: 'Venues available in the database',
  };
}

export default async function VenuesPage({ searchParams }: { searchParams: searchParamsProp }) {
  const { page = '1' } = await searchParams;
  return (
    <ListPage
      apiKey="venues"
      apiSlug="/venues"
      pageTitle="Venues"
      pageSlug="venues"
      currentPage={page}
    />
  );
}
