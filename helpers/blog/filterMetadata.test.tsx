import { MetadataObj } from '@/types/MetadataObj';
import { filterMetadata } from './fetchPostData';

it('should filter out metadata without published key or published key set to false', () => {
  const testData: MetadataObj[] = [
    {
      slug: 'simple-test',
      publishDate: '1234',
    },
    {
      slug: 'simple-test-two',
      published: true,
      publishDate: '1234',
    },
    {
      slug: 'simple-test-three',
      published: false,
      publishDate: '1234',
    },
  ];

  expect(filterMetadata(testData).length).toBe(1);
});

it('should filter out metadata without publishDate or empty publishDate', () => {
  const testData: MetadataObj[] = [
    {
      slug: 'simple-test',
      published: true,
    },
    {
      slug: 'simple-test-two',
      published: true,
      publishDate: '2025-03-31T13:55:00Z',
    },
    {
      slug: 'simple-test-three',
      published: true,
      publishDate: '',
    },
  ];

  expect(filterMetadata(testData).length).toBe(1);
});
