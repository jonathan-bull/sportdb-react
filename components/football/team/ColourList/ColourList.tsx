import { Grid, GridCol } from '@mantine/core';
import { DisplayColour, DisplayKitTypes } from '@/types/display/Teams';
import { ColourDetail } from '../ColourDetail/ColourDetail';

type ColourListProps = {
  compColours: Partial<DisplayColour>;
  isAnimated: boolean;
};

export function ColourList(props: ColourListProps) {
  const { compColours = {}, isAnimated = false } = props;
  const kitTypes: DisplayKitTypes[] = ['home', 'away', 'third'];

  if (Object.keys(compColours).length === 0 || Object.hasOwn(compColours, 'kitColours') === false) {
    return;
  }

  const colourColumns = kitTypes.map(
    (kitType) =>
      compColours.kitColours !== undefined &&
      compColours.kitColours[kitType].colours.length > 0 && (
        <GridCol key={kitType} span={{ base: 12, xs: 4 }}>
          <ColourDetail
            name={kitType[0].toUpperCase() + kitType.substring(1)}
            kitImage={compColours.kitColours[kitType].kitImage}
            colours={compColours.kitColours[kitType].colours}
            isAnimated={isAnimated}
            animatedGradient={compColours.kitColours[kitType].backgrounds.equalGradient}
            staticGradient={compColours.kitColours[kitType].backgrounds.splitGradient}
          />
        </GridCol>
      )
  );

  return <Grid>{colourColumns}</Grid>;
}
