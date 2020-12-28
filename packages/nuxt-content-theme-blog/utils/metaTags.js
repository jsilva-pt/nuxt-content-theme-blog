export function metaGeneric(title, description, url) {
  return [
    {
      hid: 'description',
      name: 'description',
      content: description,
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
  ]
}

export function metaArticle(author, publishedAt, modifiedTime) {
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
      content: publishedAt,
    },
    {
      hid: 'article:modified_time',
      name: 'article:modified_time',
      content: modifiedTime,
    },
  ]
}
