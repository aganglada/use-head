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
  getTitleTag: () => Tag
  getMetaTags: () => Tag
  getJSONLDTag: () => Tag
  getCanonicalTag: () => Tag
}

export type Tag = JSX.Element | null
