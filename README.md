# 🔍 use-seo
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

SEO is complicated, but what if you had a React hook that gave you all you need for your page.

You are on the right place.

`useSeo` is a React hook that based on some of your site properties, will return all the necessary tags you need to improve your SEO.

## Install

```bash
npm install use-seo
```

## Basic Usage

```js
import { Helmet } from 'react-helmet'
import { useSeo } from 'use-seo'

function App() {
  const { getTitleTag, getMetaTags } = useSeo({
    title: 'My App'
    description: 'This app is awesome!'
    url: 'https://www.myawesomeapp.io',
    keywords: 'Awesome, App, React',
    image: 'https://www.myawesomeapp.io/images/logo.png'
  })

  return (
    <div>
      <Helmet>
        {getTitleTag}
        {getMetaTags}
      </Helmet>
    </div>
  )
}
```

## Options

| Name          | Type   | Optional |
| ------------- | ------ | -------- |
| title         | String | Yes      |
| description   | String | Yes      |
| url           | String | Yes      |
| keywords      | String | Yes      |
| image         | String | Yes      |
| imageAlt      | String | Yes      |
| locale        | String | Yes      |
| type          | String | Yes      |
| author        | String | Yes      |
| datePublished | String | Yes      |
| dateModified  | String | Yes      |

## Returns

### getTitleTag

```jsx
<title>My App</title>
```

### getMetaTags

```jsx
<meta name="description" content="This app is awesome!" />
<meta name="keywords" content="Awesome, App, React" />
<meta property="og:image" content="https://www.myawesomeapp.io/images/logo.png" />
...
```

### getJSONLDTag

```jsx
<script type="application/ld+json">
  {
    "@id": "http://store.example.com/",
    "@type": "Store",
    "name": "Links Bike Shop",
    "description": "The most \"linked\" bike store on earth!"
  }
</script>
```

### getCanonicalTag

```jsx
<link rel="canonical" href="https://www.myawesomeapp.io" />
```

### Contributing

I would love to see you contributing to `use-seo`, also by giving feedback.
If you think something is missing, [create a new issue](https://github.com/aganglada/use-seo/issues).

[Pull request](https://github.com/aganglada/use-seo/pulls) are more than welcome ❤️️

### License

MIT &copy; aganglada

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aganglada.com"><img src="https://avatars0.githubusercontent.com/u/922348?v=4" width="100px;" alt=""/><br /><sub><b>Alejandro Garcia Anglada</b></sub></a><br /><a href="https://github.com/aganglada/use-seo/commits?author=aganglada" title="Code">💻</a> <a href="#ideas-aganglada" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!