import { Card, Group, Text, Title } from '@mantine/core';
import { BasicDataEntity } from '@/types/api/Content';

type EntityBasicsProps = {
  basicsLabel: string;
  basicsList: BasicDataEntity[];
};

export function EntityBasics(props: EntityBasicsProps) {
  const { basicsLabel, basicsList } = props;

  const dataList = basicsList.map((BasicDataItem) => (
    <Group key={BasicDataItem.key} align="center" justify="space-between">
      <Text tt="uppercase" size="xs">
        {BasicDataItem.label}
      </Text>
      {BasicDataItem.value && <Text fw={700}>{BasicDataItem.value}</Text>}
      {!BasicDataItem.value && <Text fw={200}>Not set</Text>}
    </Group>
  ));

  return (
    <>
      <Title order={4} c="white">
        {basicsLabel} detail
      </Title>
      <Card bd="1px solid white" bg="black">
        {dataList}
      </Card>
    </>
  );
}
