import { Anchor, Breadcrumbs, Container } from '@mantine/core';
import { breadcrumbItem } from '@/types/BreadcrumbItem';

type BlogBreadcrumbProps = {
  breadcrumbItems: breadcrumbItem[];
};

const createBreadcrumbItems = (subItems: breadcrumbItem[]) => {
  const items = [{ title: 'Solving Football', href: '/' }, ...subItems];

  const elements = items.map((item, index) => (
    <Anchor href={item.href} size="sm" key={index} underline="always">
      {item.title}
    </Anchor>
  ));

  return elements;
};

export function BlogBreadcrumb(props: BlogBreadcrumbProps) {
  const { breadcrumbItems } = props;

  return (
    <Container h={50} w="100%">
      <Breadcrumbs separator="/" separatorMargin="md" mt="md" mb="md">
        {createBreadcrumbItems(breadcrumbItems)}
      </Breadcrumbs>
    </Container>
  );
}
