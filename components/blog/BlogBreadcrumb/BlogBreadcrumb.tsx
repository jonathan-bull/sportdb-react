import { Anchor, Breadcrumbs, Container } from '@mantine/core';
import { breadcrumbItem } from '@/types/BreadcrumbItem';

type BlogBreadcrumbProps = {
  breadcrumbItems: breadcrumbItem[];
};

const createBreadcrumbItems = (subItems: breadcrumbItem[]) => {
  const items = [{ title: 'Home', href: '/' }, ...subItems];

  const elements = items.map((item, index) => (
    <Anchor
      href={item.href}
      key={index}
      size="sm"
      pl={index === 0 ? 0 : '1rem'}
      pr="1rem"
      py="sm"
      underline="always"
    >
      {item.title}
    </Anchor>
  ));

  return elements;
};

export function BlogBreadcrumb(props: BlogBreadcrumbProps) {
  const { breadcrumbItems } = props;

  return (
    <Container w="100%">
      <Breadcrumbs separator="/" separatorMargin="0">
        {createBreadcrumbItems(breadcrumbItems)}
      </Breadcrumbs>
    </Container>
  );
}
