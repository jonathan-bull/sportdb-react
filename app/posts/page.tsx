import { Container, Grid, Title } from '@mantine/core';
import { BlogBreadcrumb } from '@/components/blog/BlogBreadcrumb/BlogBreadcrumb';
import { BlogList } from '@/components/blog/BlogList/BlogList';
import { fetchPostData } from '../post-helpers/fetchPostData';

export function generateMetadata() {
  return {
    title: 'Posts',
    description: 'A list of posts',
  };
}

export default function PostsPage() {
  const postData = fetchPostData();
  const breadcrumbItem = [{ href: '/posts', title: 'Posts' }];

  return (
    <>
      <BlogBreadcrumb breadcrumbItems={breadcrumbItem} />
      <Container w="100%">
        <Title mb="xl">Posts</Title>
        <Grid grow>
          {postData.map((singlePost) => (
            <BlogList key={singlePost.slug} postItem={singlePost} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
