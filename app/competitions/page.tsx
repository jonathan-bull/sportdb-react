import { ListPage } from '@/components/football/content/ListPage/ListPage';
import { searchParamsProp } from '@/types/display/Content';

export function generateMetadata() {
  return {
    title: 'Competitions - solving.football',
    description: 'Competitions available in the database',
  };
}

export default async function CompetitionsPage({
  searchParams,
}: {
  searchParams: searchParamsProp;
}) {
  const { page = '1' } = await searchParams;

  return (
    <ListPage
      apiKey="competitionMaster"
      apiSlug="/competitions/master"
      pageTitle="Competitions"
      pageSlug="competitions"
      currentPage={page}
    />
  );
}
