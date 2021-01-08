export interface HeadProps {
  title?: string
  description?: string
  url?: string
  image?: string
  imageAlt?: string
  keywords?: string
  locale?: string
  type?: string
  author?: string
  card?: 'summary' | 'summary_large_image' | 'player' | 'app'
  datePublished?: string
  dateModified?: string
  favicon: string
  pwa?: {
    name: string
    themeColor: string
    icon: string
    appleIcon?: string
    maskIcon?: string
    manifestFile?: string
  }
}

export interface HeadResult {
  title: Tag
  meta: Tag
  jsonLD: Tag
  canonical: Tag
  favicon: Tag
}

export type Tag = JSX.Element | null
