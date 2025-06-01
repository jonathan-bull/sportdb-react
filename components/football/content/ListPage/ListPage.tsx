import { Container, Text, Title } from '@mantine/core';
import { ListContainer } from '@/components/football/content/ListContainer/ListContainer';
import { returnApiResponseRequest } from '@/helpers/api/api-request';
import { processForDisplay } from '@/helpers/football/processForDisplay';
import { DisplayEntity } from '@/types/display/Content';

type ListPageProps = {
  apiKey: string;
  apiSlug: string;
  pageTitle: string;
  pageSlug: string;
  currentPage: string | string[];
  listLimit?: number;
};

export async function ListPage(props: ListPageProps) {
  const { apiKey, apiSlug, pageTitle, pageSlug, currentPage = '1', listLimit = 12 } = props;

  const displayError = `No ${pageTitle.toLowerCase()} returned from the API.`;
  let displayContent: DisplayEntity[] = [];
  const contentData = await returnApiResponseRequest(apiSlug, {
    limit: listLimit.toString(),
    page: currentPage.toString(),
  });

  if (contentData instanceof Error === false && Object.hasOwn(contentData, 'data')) {
    displayContent = processForDisplay(contentData, apiKey);
  }

  return (
    <>
      <Container w="100%">
        <Title mt="md" mb="xl">
          {pageTitle}
        </Title>
        {displayContent.length === 0 ? (
          <Text>{displayError}</Text>
        ) : (
          <ListContainer
            displayContent={displayContent}
            currentPage={contentData.results ? contentData.results.currentPage : 1}
            maxPage={contentData.results ? contentData.results.maxPage : 1}
            pageSlug={pageSlug}
          />
        )}
      </Container>
    </>
  );
}
