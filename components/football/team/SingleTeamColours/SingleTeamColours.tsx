'use client';

import { useState } from 'react';
import { Flex, Group, SegmentedControl, Select, Text, Title } from '@mantine/core';
import { DisplayColour } from '@/types/display/Teams';
import { ColourList } from '../ColourList/ColourList';

type SingleTeamColoursProps = {
  teamColours: DisplayColour[];
};

export function SingleTeamColours(props: SingleTeamColoursProps) {
  const { teamColours = [] } = props;

  if (Object.keys(teamColours).length === 0) {
    return (
      <>
        <Title order={4} c="white">
          Team colours
        </Title>
        <Text>No colour data available for this team.</Text>
      </>
    );
  }

  const compSelect = teamColours
    .map((teamColour, teamIndex) => {
      return {
        value: teamIndex.toString(),
        label: teamColour.season.display,
      };
    })
    .sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));

  const [selectedComp, setSelectedComp] = useState<string | null>(
    compSelect[compSelect.length - 1].value
  );

  const [animatedGradients, setAnimatedGradients] = useState<string>('static');

  return (
    <>
      <Group justify="space-between">
        <Title order={4} c="white">
          Team colours
        </Title>
        <Flex align="flex-end" gap="md">
          <div>
            <Text size="sm" fw="500">
              Kit background
            </Text>
            <SegmentedControl
              value={animatedGradients}
              data={[
                { label: 'Static', value: 'static' },
                { label: 'Animated', value: 'animated' },
              ]}
              onChange={setAnimatedGradients}
            />
          </div>
          <Select
            value={selectedComp}
            label="Season"
            placeholder="Pick value"
            data={compSelect}
            checkIconPosition="right"
            onChange={(value) => setSelectedComp(value)}
          />
        </Flex>
      </Group>
      {typeof selectedComp === 'string' && (
        <ColourList
          compColours={teamColours[Number(selectedComp)]}
          isAnimated={animatedGradients === 'animated'}
        />
      )}
    </>
  );
}
