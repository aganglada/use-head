export interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  imageAlt?: string
  keywords?: string
  locale?: string
  type?: string
  author?: string
  datePublished?: string
  dateModified?: string
}

export interface SEOReturnProps {
  title: Tag
  meta: Tag
  jsonLD: Tag
  canonical: Tag
}

export type Tag = JSX.Element | null
