import React from 'react'

interface SEOProps {
  title?: string
  description?: string
  url?: string
  image?: string
  keywords?: string
}

interface SEOReturnProps {
  titleTag: () => Tag
  metaTags: () => Tag
}

type Tag = JSX.Element | null

function tag(content: string | undefined, element: JSX.Element): Tag {
  return content ? element : null
}

function useSeo(props: SEOProps): SEOReturnProps {
  return {
    titleTag() {
      return tag(props.title, <title>{props.title}</title>)
    },
    metaTags() {
      const metaTags = [
        tag(
          props.description,
          <meta name="description" content={props.description} />
        ),
        tag(props.keywords, <meta name="keywords" content={props.keywords} />),
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
          props.title,
          <meta property="twitter:title" content={props.title} />
        ),
        tag(
          props.title,
          <meta property="twitter:image" content={props.image} />
        ),
      ]

      return <>{metaTags.filter(Boolean)}</>
    },
  }
}

export default useSeo
