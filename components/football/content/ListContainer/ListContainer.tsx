'use client';

import { Group, SegmentedControl } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ListContent } from '@/components/football/content/ListContent/ListContent';
import { ListPaging } from '@/components/football/content/ListPaging/ListPaging';
import { DisplayEntity } from '@/types/display/Content';

type ListContainerProps = {
  currentPage: number;
  displayContent: DisplayEntity[];
  maxPage: number;
  pageSlug: string;
};

export function ListContainer(props: ListContainerProps) {
  const { displayContent, pageSlug, currentPage = 1, maxPage = 1 } = props;
  const [viewType, setViewType] = useLocalStorage({
    key: `container-view-${pageSlug}`,
    defaultValue: 'row',
  });

  return (
    <>
      <Group justify="flex-end" mb="md">
        <SegmentedControl
          data={[
            { label: 'Card', value: 'card' },
            { label: 'Row', value: 'row' },
          ]}
          value={viewType}
          onChange={setViewType}
        />
      </Group>
      <ListContent linkSlug={pageSlug} displayStyle={viewType} displayContent={displayContent} />
      <ListPaging currentPage={currentPage} lastPage={maxPage} />
    </>
  );
}
