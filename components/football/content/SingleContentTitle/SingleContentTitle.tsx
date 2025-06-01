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
import { convertStringToInitials } from '@/helpers/football/convertStringToInitials';
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
  displayType?: string;
  size?: string;
  hasImage?: boolean;
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
    displayType = 'row',
    size = 'normal',
    hasBorder = true,
    hasImage = true,
  } = props;

  const { colorScheme } = useMantineColorScheme();

  const usingDefaultColourValues = colourBackground === 'white' && colourText === 'black';
  const useDefaultColourPalette = usingDefaultColourValues === false && colorScheme !== 'dark';

  const displayBackground = useDefaultColourPalette ? colourBackground : colourText;
  const displayText = useDefaultColourPalette ? colourText : colourBackground;
  const displayBorder = useDefaultColourPalette ? colourText : colourBackground;

  const leftColumnSpan =
    displayType === 'card'
      ? { base: 12 }
      : {
          base: size === 'small' ? 2 : 4,
          xs: size === 'small' ? 1 : 2,
        };

  const rightColumnSpan =
    displayType === 'card'
      ? { base: 12 }
      : {
          base: size === 'small' ? 10 : 8,
          xs: size === 'small' ? 11 : 10,
        };

  const avatarString = nameCode
    ? nameCode
    : convertStringToInitials(nameDisplay ? nameDisplay : '');

  return (
    <Card
      c={displayText}
      bg={displayBackground}
      p={size === 'small' ? '.5rem' : 'sm'}
      bd={hasBorder ? `1px solid ${displayBorder}` : ``}
    >
      <Grid gutter={size === 'small' ? 'xs' : 'sm'} align="stretch">
        {hasImage && (
          <GridCol span={leftColumnSpan}>
            <Avatar
              radius="xs"
              h="100%"
              w="100%"
              alt={size === 'normal' ? nameDisplay : 'Logo'}
              src={image ?? null}
            >
              {avatarString}
            </Avatar>
          </GridCol>
        )}
        <GridCol span={hasImage ? rightColumnSpan : { base: 12 }}>
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
