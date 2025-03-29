import dynamic from 'next/dynamic';
import matter from 'gray-matter';
import { Container, Stack } from '@mantine/core';
import { BlogBreadcrumb } from '@/components/blog/BlogBreadcrumb/BlogBreadcrumb';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { data } = matter.read(`./blog/${slug}.mdx`);

  return data;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const MDXFile = dynamic(() => import(`@/blog/${slug}.mdx`));
  const { data } = matter.read(`./blog/${slug}.mdx`);
  const breadcrumbItems = [
    { href: '/posts', title: 'Posts' },
    { href: slug, title: data.title },
  ];

  return (
    <Stack>
      <BlogBreadcrumb breadcrumbItems={breadcrumbItems} />
      <Container w="100%">
        <MDXFile />
      </Container>
    </Stack>
  );
}
