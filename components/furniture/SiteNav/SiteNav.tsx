import { Flex, NavLink } from '@mantine/core';
import classes from './SiteNav.module.css';

type siteNavLink = {
  label: string;
  slug: string;
};

export function SiteNav() {
  const siteNavLinks: siteNavLink[] = [
    { label: 'Home', slug: '/' },
    { label: 'Teams', slug: '/teams' },
    { label: 'Posts', slug: '/posts' },
  ];

  return (
    <Flex direction="column">
      {siteNavLinks.map((siteNavLink) => (
        <NavLink
          classNames={{
            root: classes.label,
          }}
          key={siteNavLink.slug}
          href={siteNavLink.slug}
          label={siteNavLink.label}
        />
      ))}
    </Flex>
  );
}
