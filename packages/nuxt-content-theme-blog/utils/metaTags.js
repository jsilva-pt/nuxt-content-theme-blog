export function metaGeneric(
  title,
  description,
  url,
  socialImage,
  socialImageAlt
) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
    },
    {
      hid: 'author',
      name: 'author',
      content: 'José Silva',
    },
    // Open Graph
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'website',
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: description,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: url,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: socialImage,
    },
    // Twitter Card
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: socialImage,
    },
    {
      hid: 'twitter:image:',
      name: 'twitter:image:alt',
      content: socialImageAlt,
    },
  ]
}

export function metaArticle(author, publishedTime, modifiedTime) {
  return [
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'article:author',
      name: 'article:author',
      content: author,
    },
    {
      hid: 'article:published_time',
      name: 'article:published_time',
      content: publishedTime,
    },
    {
      hid: 'article:modified_time',
      name: 'article:modified_time',
      content: modifiedTime,
    },
  ]
}
