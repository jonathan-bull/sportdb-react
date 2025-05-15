import { Card, Group, Text, Title } from '@mantine/core';
import { TeamNames } from '@/types/api/Teams';

export function SingleTeamNames(props: TeamNames) {
  const { full, display, short, shortAlt, nickName, code } = props;

  const nameData = [
    {
      key: 'display',
      label: 'Display name',
      value: display,
    },
    {
      key: 'full',
      label: 'Full name',
      value: full,
    },
    {
      key: 'short',
      label: 'Short name',
      value: short,
    },
    {
      key: 'shortAlt',
      label: 'Alternative short name',
      value: shortAlt,
    },
    {
      key: 'nickName',
      label: 'Nickname',
      value: nickName,
    },
    {
      key: 'codeName',
      label: 'Code name',
      value: code,
    },
  ];

  const nameList = nameData.map((singleName) => (
    <Group key={singleName.key} align="center" justify="space-between">
      <Text tt="uppercase" size="xs">
        {singleName.label}
      </Text>
      {singleName.value && <Text fw={700}>{singleName.value}</Text>}
      {!singleName.value && <Text fw={200}>Not set</Text>}
    </Group>
  ));

  return (
    <>
      <Title order={4} c="white">
        Team names
      </Title>
      <Card>{nameList}</Card>
    </>
  );
}
