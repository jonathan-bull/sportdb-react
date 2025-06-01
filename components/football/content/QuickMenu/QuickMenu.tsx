import { Fragment } from 'react';
import { Anchor, Text } from '@mantine/core';

type linkObj = {
  text: string;
  href: string;
};

export function QuickMenu() {
  const linkMapper = (linkArr: linkObj[]) => {
    return (
      <Text ta="center" mt="xl" size="lg">
        {linkArr.map((singleLink, linkInd) =>
          singleLinkRender(singleLink, linkInd, linkArr.length)
        )}
      </Text>
    );
  };

  const singleLinkRender = (linkData: linkObj, linkIndex: number, linkTotal: number) => {
    return (
      <Fragment key={linkIndex}>
        <Anchor fw={500} underline="always" href={linkData.href}>
          {linkData.text}
        </Anchor>
        {linkIndex + 1 !== linkTotal && ' | '}
      </Fragment>
    );
  };

  const internalLinks: linkObj[] = [
    {
      text: 'Competitions',
      href: '/competitions',
    },
    {
      text: 'People',
      href: '/people',
    },
    {
      text: 'Teams',
      href: '/teams',
    },
    {
      text: 'Venues',
      href: '/venues',
    },
    {
      text: 'Posts',
      href: '/posts',
    },
  ];

  const externalLinks: linkObj[] = [
    {
      text: 'Storybook components',
      href: 'https://storybook.solving.football',
    },
    {
      text: 'GitHub repository',
      href: 'https://github.com/jonathan-bull/sportdb-react',
    },
  ];

  return (
    <>
      {linkMapper(internalLinks)}
      {linkMapper(externalLinks)}
    </>
  );
}
