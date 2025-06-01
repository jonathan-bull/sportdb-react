export type JSONValue = string | number | boolean | JSONObject | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONValue> {}

export type apiResponse = {
  data?: JSONObject[];
  results?: {
    total: number;
    limit: number;
    currentPage: number;
    maxPage: number;
    nextPage?: string;
    prevPage?: string;
  };
};
