import { SEOProps } from '../types'

function getJSONLd({
  url,
  title,
  type,
  image,
  description,
  author,
  datePublished,
  dateModified,
}: SEOProps) {
  const isArticle = type === 'article'

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
    },
  ]

  return isArticle
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          headline: description,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            url,
            name: author,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': url,
          },
          datePublished,
          dateModified,
        },
      ]
    : schemaOrgJSONLD
}

export default getJSONLd
