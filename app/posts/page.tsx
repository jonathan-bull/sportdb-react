import { Container, Title } from '@mantine/core';
import { BlogBreadcrumb } from '@/components/blog/BlogBreadcrumb/BlogBreadcrumb';
import BlogList from '@/components/blog/BlogList/BlogList';
import { fetchPostData } from '@/helpers/blog/fetchPostData';

export function generateMetadata() {
  return {
    title: 'Posts - solving.football',
    description: 'Blog posts documenting the creation of this website',
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
        <BlogList postList={postData} />
      </Container>
    </>
  );
}
