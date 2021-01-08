import * as React from 'react'
import { HeadProps } from 'types'
import { tag } from './tag'

export const metaTags = (props: HeadProps) =>
  [
    // -- general
    tag(
      props.description,
      <meta name="description" content={props.description} key="head-description" />,
    ),
    tag(props.keywords, <meta name="keywords" content={props.keywords} key="head-keywords" />),
    // -- og tags
    tag(props.title, <meta property="og:title" content={props.title} key="head-og:title" />),
    tag(
      props.description,
      <meta property="og:description" content={props.description} key="head-og:description" />,
    ),
    tag(props.description, <meta property="og:image" content={props.image} key="head-og:image" />),
    tag(
      props.imageAlt,
      <meta property="og:image:alt" content={props.imageAlt} key="head-og:image:alt" />,
    ),
    tag(props.locale, <meta property="og:locale" content={props.locale} key="head-og:locale" />),
    tag(props.url, <meta property="og:url" content={props.url} key="head-og:url" />),
    tag(props.type, <meta property="og:type" content={props.type} key="head-og:type" />),
    tag(
      props?.pwa?.name,
      <meta property="og:site_name" content={props.type} key="head-og:site_name" />,
    ),
    // -- twitter tags
    tag(
      props.title,
      <meta property="twitter:title" content={props.title} key="head-twitter:title" />,
    ),
    tag(
      props.description,
      <meta
        property="twitter:description"
        content={props.description}
        key="head-twitter:description"
      />,
    ),
    tag(
      props.title,
      <meta property="twitter:image" content={props.image} key="head-twitter:image" />,
    ),
    tag(
      props.imageAlt,
      <meta property="twitter:image:alt" content={props.imageAlt} key="head-twitter:image:alt" />,
    ),
    tag(
      props.author,
      <meta name="twitter:creator" content={props.author} key="head-twitter:creator" />,
    ),
    tag(props.card, <meta name="twitter:card" content={props.type} key="head-twitter:card" />),
    // -- PWA
    tag(
      props?.pwa?.name,
      <meta name="application-name" content={props?.pwa?.name} key="head-application-name" />,
    ),
    tag(
      props?.pwa?.name,
      <meta
        name="apple-mobile-web-app-capable"
        content="yes"
        key="head-apple-mobile-web-app-capable"
      />,
    ),
    tag(
      props?.pwa?.name,
      <meta name="mobile-web-app-capable" content="yes" key="head-mobile-web-app-capable" />,
    ),
    tag(
      props?.pwa?.name,
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="default"
        key="head-apple-mobile-web-app-status-bar-style"
      />,
    ),
    tag(
      props?.pwa?.name,
      <meta
        name="apple-mobile-web-app-title"
        content={props?.pwa?.name}
        key="head-apple-mobile-web-app-title"
      />,
    ),
    tag(
      props?.pwa?.name,
      <meta name="format-detection" content="telephone=no" key="head-format-detection" />,
    ),
    tag(
      props?.pwa?.name,
      <meta
        name="msapplication-tap-highlight"
        content="no"
        key="head-msapplication-tap-highlight"
      />,
    ),
    tag(
      props?.pwa?.themeColor,
      <meta name="theme-color" content={props?.pwa?.themeColor} key="head-theme-color" />,
    ),
  ].filter(Boolean)
