import { Card, CardSection, ColorSwatch, Group, Image, Text, Tooltip } from '@mantine/core';
import classes from './ColourDetail.module.css';

type ColourDetailProps = {
  name: string;
  kitImage: string;
  colours: string[];
  animatedGradient: string;
  staticGradient: string;
  isAnimated: boolean;
};

export function ColourDetail(props: ColourDetailProps) {
  const {
    name = '',
    colours = [],
    kitImage = '',
    staticGradient = '',
    animatedGradient = '',
    isAnimated = false,
  } = props;

  const colourSwatchList = colours.map((singleColour, singleKey) => (
    <Tooltip key={singleKey} label={singleColour}>
      <ColorSwatch color={singleColour} />
    </Tooltip>
  ));

  return (
    <Card bd="1px solid white" c="white" bg="transparent">
      {name !== '' && (
        <CardSection inheritPadding>
          <Text py=".5rem" size="xl" fw={700}>
            {name}
          </Text>
        </CardSection>
      )}
      <CardSection>
        {kitImage !== '' && (
          <Image
            bg={isAnimated ? animatedGradient : staticGradient}
            src={kitImage}
            className={isAnimated ? classes.animated : ''}
            fit="contain"
          />
        )}
      </CardSection>
      {colours.length > 0 && (
        <CardSection p="sm">
          <Group justify="center">{colourSwatchList}</Group>
        </CardSection>
      )}
      {colours.length === 0 && (
        <CardSection p="sm">
          <Text py=".5rem" size="xl" fw={700}>
            Data unavailable
          </Text>
        </CardSection>
      )}
    </Card>
  );
}
