import { ContentDate, ContentMapping } from './Content';

export type SinglePerson = {
  id: number;
  name: string;
  fullName: string | null;
  birth: {
    date: ContentDate;
    place: string | null;
    country: string | null;
  };
  nation: {
    name: string;
    short: string;
    flag: string;
  };
  height: {
    cm: number;
    ft: number;
  };
  mapping: ContentMapping[];
};
