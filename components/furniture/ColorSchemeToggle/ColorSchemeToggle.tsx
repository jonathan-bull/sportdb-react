'use client';

import { Button, Group, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Group justify="center">
      <Button
        bg="black"
        onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      >
        {computedColorScheme === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Group>
  );
}
