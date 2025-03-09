import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MetadataObj } from '@/types/MetadataObj';

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

  if (metadataArr.length === 0) {
    return [];
  }

  return metadataArr.sort((a: MetadataObj, b: MetadataObj) => {
    if (typeof a.publishDate === 'undefined' || typeof b.publishDate === 'undefined') {
      return -1;
    }

    return a.publishDate < b.publishDate ? 1 : -1;
  });
};
