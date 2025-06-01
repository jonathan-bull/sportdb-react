import { ContentMapping } from '@/types/api/Content';

export type DisplayPerson = {
  id: number;
  name: string;
  mapping?: ContentMapping[];
};
