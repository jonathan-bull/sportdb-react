'use client';

import { Group, Pagination } from '@mantine/core';

type ListPagingProps = {
  currentPage?: number;
  lastPage?: number;
};

export function ListPaging(props: ListPagingProps) {
  const { currentPage = 0, lastPage = 0 } = props;

  return (
    <Group mb="sm" justify="center">
      <Pagination
        value={currentPage}
        total={lastPage}
        getItemProps={(page) => ({
          component: 'a',
          href: `?page=${page}`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '?page=1' };
          }

          if (control === 'last') {
            return { component: 'a', href: `?page=${lastPage}` };
          }

          if (control === 'next') {
            return { component: 'a', href: `?page=${currentPage + 1}` };
          }

          if (control === 'previous') {
            return { component: 'a', href: `?page=${currentPage - 1}` };
          }

          return {};
        }}
      />
    </Group>
  );
}
