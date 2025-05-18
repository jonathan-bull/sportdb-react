export type DisplayEntity = {
  id: number;
  bgColour?: string;
  textColour?: string;
  detailEnd?: string;
  detailSeparator?: string;
  detailStart?: string;
  codeName?: string;
  displayName?: string;
  logo?: string;
};

export type searchParamsProp = Promise<{ [key: string]: string | string[] | undefined }>;
