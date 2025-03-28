import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MetadataObj } from '@/types/MetadataObj';

/**
 * Checks whether or not a string can be interpreted as a date.
 *
 * @param dateString A string that can be interpreted as a date.
 *
 * @return {boolean} Whether or not the date is considered valid.
 */
export const dateStringIsValid = (dateString: string): boolean => {
  if (dateString === '') {
    return false;
  }

  const dateItem = new Date(dateString);
  return !isNaN(dateItem.getTime());
};

/**
 * Filters out metadata items missing key values.
 * Sorts metadata items by publishDate.
 *
 * @param {metadataObj[]} unfilteredData
 *
 * @returns {metadataObj[]} Filtered metadata, or an empty array.
 */
export const filterMetadata = (unfilteredData: MetadataObj[]): MetadataObj[] => {
  if (unfilteredData.length === 0) {
    return [];
  }

  // Remove any meta file missing the 'publishDate' key, the 'published' key or if 'published' is false.
  const filteredData: MetadataObj[] = unfilteredData.filter((metaObj) => {
    return (
      'publishDate' in metaObj &&
      dateStringIsValid(metaObj.publishDate ?? '') === true &&
      'published' in metaObj &&
      metaObj.published === true
    );
  });

  return filteredData.sort((a: MetadataObj, b: MetadataObj) => {
    // Linting returns an error if there's no check to confirm MetadataObj exists here.
    if (typeof a.publishDate === 'undefined' || typeof b.publishDate === 'undefined') {
      return -1;
    }

    return a.publishDate < b.publishDate ? 1 : -1;
  });
};

/**
 * Fetches post data from the blog folder.
 * Converts any metadata into the correct type.
 * Returns that metadata.
 *
 * @returns {MetadataObj[]} An array of metadata objects.
 */
export const fetchPostData = (): MetadataObj[] => {
  const slugs: string[] = fs.readdirSync(path.join(process.cwd(), 'blog'));
  const metadataArr: MetadataObj[] = [];

  slugs.forEach((slugVal) => {
    const { data } = matter.read(`./blog/${slugVal}`);

    if (Object.keys(data).length > 0) {
      data.slug = slugVal.replace('.mdx', '');
      metadataArr.push(data as MetadataObj);
    }
  });

  return filterMetadata(metadataArr) ?? [];
};
