import React from 'react'
import { SEOProps, SEOReturnProps, Tag } from './types'
import getJSONLd from './utils/jsonLD'

function tag(content: string | undefined, element: JSX.Element): Tag {
  return content ? element : null
}

export function useSeo(props: SEOProps): SEOReturnProps {
  const metaTags = [
    // -- general
    tag(
      props.description,
      <meta name="description" content={props.description} key="seo-description" />,
    ),
    tag(props.keywords, <meta name="keywords" content={props.keywords} key="seo-keywords" />),
    // -- og tags
    tag(props.title, <meta property="og:title" content={props.title} key="seo-og:title" />),
    tag(
      props.description,
      <meta property="og:description" content={props.description} key="seo-og:description" />,
    ),
    tag(props.description, <meta property="og:image" content={props.image} key="seo-og:image" />),
    tag(
      props.imageAlt,
      <meta property="og:image:alt" content={props.imageAlt} key="seo-og:image:alt" />,
    ),
    tag(props.locale, <meta property="og:locale" content={props.locale} key="seo-og:locale" />),
    tag(props.url, <meta property="og:url" content={props.url} key="seo-og:url" />),
    tag(props.type, <meta property="og:type" content={props.type} key="seo-og:type" />),
    // -- twitter tags
    tag(
      props.title,
      <meta property="twitter:title" content={props.title} key="seo-twitter:title" />,
    ),
    tag(
      props.description,
      <meta
        property="twitter:description"
        content={props.description}
        key="seo-twitter:description"
      />,
    ),
    tag(
      props.title,
      <meta property="twitter:image" content={props.image} key="seo-twitter:image" />,
    ),
    tag(
      props.imageAlt,
      <meta property="twitter:image:alt" content={props.imageAlt} key="seo-twitter:image:alt" />,
    ),
    tag(
      props.author,
      <meta name="twitter:creator" content={props.author} key="seo-twitter:creator" />,
    ),
    tag(props.type, <meta name="twitter:card" content={props.type} key="seo-twitter:card" />),
  ]

  return {
    title: tag(props.title, <title>{props.title}</title>),
    canonical: tag(props.url, <link rel="canonical" href={props.url} />),
    meta: <>{metaTags.filter(Boolean)}</>,
    jsonLD: <script type="application/ld+json">{JSON.stringify(getJSONLd(props))}</script>,
  }
}
