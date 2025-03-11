'use client';

import {
  Avatar,
  Card,
  Divider,
  Flex,
  Grid,
  GridCol,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import classes from './SingleContentTitle.module.css';

type SingleContentProps = {
  colourBackground?: string;
  colourText?: string;
  detailEnd?: string;
  detailStart?: string;
  detailSeparator?: string;
  nameCode?: string;
  nameDisplay?: string;
  image?: string;
  size?: string;
  hasBorder?: boolean;
};

export function SingleContentTitle(props: SingleContentProps) {
  const {
    colourBackground = 'white',
    colourText = 'black',
    detailEnd = '',
    detailSeparator = 'in',
    detailStart = '',
    nameCode,
    nameDisplay,
    image,
    size = 'normal',
    hasBorder = true,
  } = props;

  // Default code name - first three letters of display name.
  // Trim code name to three characters and
  const displayNameCode = nameCode ? nameCode : nameDisplay;
  const { colorScheme } = useMantineColorScheme();

  const usingDefaultColourValues = colourBackground === 'white' && colourText === 'black';
  const useDefaultColourPalette = usingDefaultColourValues === false && colorScheme !== 'dark';

  const displayBackground = useDefaultColourPalette ? colourBackground : colourText;
  const displayText = useDefaultColourPalette ? colourText : colourBackground;
  const displayBorder = useDefaultColourPalette ? colourText : colourBackground;

  return (
    <Card
      c={displayText}
      bg={displayBackground}
      p={size === 'small' ? '.5rem' : 'sm'}
      bd={hasBorder ? `1px solid ${displayBorder}` : ``}
    >
      <Grid gutter={size === 'small' ? 'xs' : 'sm'} align="center">
        <GridCol
          span={{
            base: size === 'small' ? 2 : 4,
            xs: size === 'small' ? 1 : 2,
          }}
        >
          <Avatar
            h="auto"
            radius="xs"
            w="auto"
            alt={size === 'normal' ? nameDisplay : 'Logo'}
            src={image}
          >
            {displayNameCode?.substring(0, 3).toUpperCase()}
          </Avatar>
        </GridCol>
        <GridCol
          span={{
            base: size === 'small' ? 10 : 8,
            xs: size === 'small' ? 11 : 10,
          }}
        >
          <Flex direction="column" gap={size === 'small' ? '.5rem' : 'xs'}>
            <Title
              className={size === 'small' ? classes['title--small'] : classes.title}
              order={2}
              size="h4"
              textWrap="balance"
            >
              {nameDisplay}
            </Title>
            {detailStart && (
              <>
                <Divider bd={`1px solid ${displayBorder}`} />
                <Text className={size === 'small' ? classes['subtitle--small'] : classes.subtitle}>
                  {detailEnd !== '' ? (
                    <>
                      {detailStart} {detailSeparator} {detailEnd}
                    </>
                  ) : (
                    <>{detailStart}</>
                  )}
                </Text>
              </>
            )}
          </Flex>
        </GridCol>
      </Grid>
    </Card>
  );
}
