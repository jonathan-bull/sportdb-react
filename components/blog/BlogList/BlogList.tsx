import { Grid, GridCol } from '@mantine/core';
import { BlogListItem } from '@/components/blog/BlogListItem/BlogListItem';
import { MetadataObj } from '@/types/MetadataObj';

type BlogListProps = { postList: MetadataObj[] };

export default function BlogList(props: BlogListProps) {
  const { postList } = props;

  return (
    <Grid grow>
      {postList.map((singlePost) => (
        <GridCol key={singlePost.slug} span={{ base: 12, sm: 6 }} mb="xl">
          <BlogListItem key={singlePost.slug} {...singlePost} />
        </GridCol>
      ))}
    </Grid>
  );
}
