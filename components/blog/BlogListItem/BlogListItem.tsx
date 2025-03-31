import { Anchor, Card, CardSection, Text, Title } from '@mantine/core';
import { MetadataObj } from '@/types/MetadataObj';
import classes from './BlogListItem.module.css';

type BlogListItemProps = MetadataObj;

const readableDate = (dateString: string): string => {
  const dateObj = new Date(dateString);

  return dateObj.toLocaleDateString('en-gb', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
};

export function BlogListItem(props: BlogListItemProps) {
  const { description, slug, title, publishDate, published } = props;

  return (
    slug &&
    published && (
      <Card c="black" mb="md" className={classes.container}>
        <CardSection className={classes.section}>
          <Anchor c="black" href={`/posts/${slug}`}>
            <Title order={2} size="h3" mb="md">
              {title}
            </Title>
          </Anchor>
          {description && <Text size="lg">{description}</Text>}
        </CardSection>
        {publishDate && <Text size="xs">Published on {readableDate(publishDate)}</Text>}
        <Text>
          <Anchor c="black" href={`/posts/${slug}`} underline="always">
            Read more
          </Anchor>
        </Text>
      </Card>
    )
  );
}
