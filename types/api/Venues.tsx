import { ContentMapping } from '@/types/api/Content';

export type SingleVenue = {
  id: number;
  name: string;
  the: number | null;
  address: string | null;
  capacity: number | null;
  built: number | null;
  dimensions: {
    width: number | null;
    length: number | null;
  };
  mapping: ContentMapping[];
};

export type Venues = {
  venues: SingleVenue[];
  total: number;
  limit: number;
  currentPage: number;
  maxPage: number;
};
