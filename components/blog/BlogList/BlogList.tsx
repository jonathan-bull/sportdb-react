import { Grid, GridCol } from '@mantine/core';
import { MetadataObj } from '@/types/MetadataObj';
import { BlogListItem } from '../BlogListItem/BlogListItem';

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
