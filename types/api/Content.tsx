export type BasicDataEntity = {
  label: string;
  key: string;
  value?: string | number | null;
};

export type ContentMapping = {
  displayName: string;
  sourceName: string;
  sourceID: string;
  sourceURL: string;
};

export type ContentDate = {
  id: number;
  unix: number;
  date: {
    day: number;
    month: number;
    year: number;
  };
  display: {
    longFull: string;
    shortFull: string;
    longDate: string;
    shortDate: string;
    longTime: string;
    shortTime: string;
  };
  time: number;
  relative: {
    type: string;
    days: number;
    months: number;
    years: number;
    hours: number;
    minutes: number;
    total: {
      days: number;
      months: number;
      years: number;
      hours: number;
      minutes: number;
    };
  };
};
