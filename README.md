# 🔍 use-seo

SEO is complicated, but what if you had a React hook that gave you all you need for your page.

You are on the right place.

`useSeo` is a React hook that based on some of your site properties, will return all the necessary tags you need to improve your SEO.

## Install

```bash
yarn add use-seo
```

## Basic Usage

```js
import { Helmet } from 'react-helmet'
import useSeo from 'use-seo'

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

### getJSONLDScript

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
