import { ReactElement } from 'react';
import type { MDXComponents } from 'mdx/types';
import { Anchor, Code, Title, TitleOrder } from '@mantine/core';

/**
 * Guides I've been using:
 * https://didoesdigital.com/blog/nextjs-blog-02-add-mdx/
 * https://www.alexchantastic.com/building-a-blog-with-next-and-mdx
 * https://www.codeconcisely.com/posts/nextjs-mdx/
 * https://github.com/mantinedev/mantine/blob/master/apps/help.mantine.dev/src/components/MdxLayout/MdxLayout.tsx
 * https://github.com/mantinedev/mantine/blob/master/apps/help.mantine.dev/src/pages/q/apply-styles-to-all.mdx
 * https://help.mantine.dev/q/apply-styles-to-all
 * https://andersdjohnson.com/posts/nextjs-static-mdx-dynamic-routes-metadata
 */

/**
 * Creates a Title element containing the passed content.
 * Slightly easier than doing this per heading declaration.
 *
 * @param headerType The type of header - 1 to 6.
 * @param props The props of the title.
 *
 * @return ReactElement A Title element
 */
const mdxTitle = (headerType: TitleOrder, props: any): ReactElement => {
  const { children } = props;

  return <Title order={headerType}>{children}</Title>;
};

const mdxPre = (props: any): ReactElement => {
  const { children } = props;

  return <Code block>{children}</Code>;
};

export function MdxLink({ href, ...others }: React.ComponentPropsWithoutRef<'a'>) {
  return <Anchor underline="always" fw={500} href={href} {...others} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => mdxTitle(1, props),
    h2: (props) => mdxTitle(2, props),
    h3: (props) => mdxTitle(3, props),
    h4: (props) => mdxTitle(4, props),
    h5: (props) => mdxTitle(5, props),
    h6: (props) => mdxTitle(6, props),
    a: MdxLink,
    code: Code as any,
    pre: mdxPre,
    ...components,
  };
}
