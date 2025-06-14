import { Anchor, Card, Flex, Stack, Text, Title } from '@mantine/core';
import { ContentMapping } from '@/types/api/Content';

export function SingleContentMapping(props: { contentMapping: ContentMapping[] }) {
  const { contentMapping } = props;

  // Filter out empty.
  const filteredMapping = contentMapping.filter((singleMap) => {
    return Object.hasOwn(singleMap, 'sourceName') && Object.hasOwn(singleMap, 'sourceID');
  });

  const displayMapping = filteredMapping.map((singleMap, mapInd) => (
    <Stack key={mapInd}>
      <Flex columnGap="sm" justify="space-between" direction={{ base: 'column', sm: 'row' }}>
        <Flex w="100%" justify="space-between" align="center">
          <Text tt="uppercase" size="xs">
            Source
          </Text>
          <Text fw={700}>{singleMap.sourceName}</Text>
        </Flex>
        <Flex w="100%" justify="space-between" align="center">
          <Text tt="uppercase" size="xs">
            ID
          </Text>
          {singleMap.sourceURL && (
            <Anchor
              fw={700}
              underline="always"
              href={
                singleMap.sourceName === 'Transfermarkt'
                  ? `https://www.transfermarkt.com${singleMap.sourceURL}`
                  : singleMap.sourceURL
              }
              target="_blank"
            >
              {singleMap.displayName} ({singleMap.sourceID})
            </Anchor>
          )}
          {singleMap.sourceURL === '' && (
            <Text fw={700}>
              {singleMap.displayName} ({singleMap.sourceID})
            </Text>
          )}
        </Flex>
      </Flex>
    </Stack>
  ));

  return (
    <>
      <Title order={4} c="white">
        Data sources
      </Title>
      <Card bd="1px solid white" c="white" bg="black">
        {filteredMapping.length === 0 && <Text>No mapping available for this content.</Text>}
        {filteredMapping.length > 0 && displayMapping}
      </Card>
    </>
  );
}
