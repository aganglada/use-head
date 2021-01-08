import * as React from 'react'
import { HeadProps, HeadResult } from './types'
import { metaTags } from './utils/meta'
import { tag } from './utils/tag'
import getJSONLd from './utils/jsonLD'

export function useHead(props: HeadProps): HeadResult {
  const meta = metaTags(props)

  return {
    title: tag(props.title, <title>{props.title}</title>),
    canonical: tag(props.url, <link rel="canonical" href={props.url} />),
    favicon: tag(props.favicon, <link rel="shortcut icon" href={props.favicon} />),
    meta: <>{meta}</>,
    jsonLD: (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJSONLd(props)) }}
      />
    ),
  }
}
