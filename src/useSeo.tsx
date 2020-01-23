import React from 'react'
import { SEOProps, SEOReturnProps, Tag } from '../types/index'
import getJSONLD from './jsonLD'

function tag(content: string | undefined, element: JSX.Element): Tag {
  return content ? element : null
}

function useSeo(props: SEOProps): SEOReturnProps {
  return {
    getTitleTag() {
      return tag(props.title, <title>{props.title}</title>)
    },
    getCanonicalTag() {
      return tag(props.url, <link rel="canonical" href={props.url} />)
    },
    getMetaTags() {
      const metaTags = [
        // -- general
        tag(
          props.description,
          <meta name="description" content={props.description} />
        ),
        tag(props.keywords, <meta name="keywords" content={props.keywords} />),
        // -- og tags
        tag(props.title, <meta property="og:title" content={props.title} />),
        tag(
          props.description,
          <meta property="og:description" content={props.description} />
        ),
        tag(
          props.description,
          <meta property="og:image" content={props.image} />
        ),
        tag(
          props.imageAlt,
          <meta property="og:image:alt" content={props.imageAlt} />
        ),
        tag(props.locale, <meta property="og:locale" content={props.locale} />),
        tag(props.url, <meta property="og:url" content={props.url} />),
        tag(props.type, <meta property="og:type" content={props.type} />),
        // -- twitter tags
        tag(
          props.title,
          <meta property="twitter:title" content={props.title} />
        ),
        tag(
          props.description,
          <meta property="twitter:description" content={props.description} />
        ),
        tag(
          props.title,
          <meta property="twitter:image" content={props.image} />
        ),
        tag(
          props.imageAlt,
          <meta property="twitter:image:alt" content={props.imageAlt} />
        ),
        tag(
          props.author,
          <meta name="twitter:creator" content={props.author} />
        ),
        tag(props.type, <meta name="twitter:card" content={props.type} />),
      ]

      return <>{metaTags.filter(Boolean)}</>
    },
    getJSONLDTag() {
      return (
        <script type="application/ld+json">
          {JSON.stringify(getJSONLD(props))}
        </script>
      )
    },
  }
}

export default useSeo
