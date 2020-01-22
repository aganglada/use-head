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
  const { titleTag, metaTags } = useSeo({
    title: 'My App'
    description: 'This app is awesome!'
    url: 'https://www.myawesomeapp.io',
    keywords: 'Awesome, App, React',
    image: 'https://www.myawesomeapp.io/images/logo.png'
  })

  return (
    <div>
      <Helmet>
        {titleTag}
        {metaTags}
      </Helmet>
    </div>
  )
}
```

## Options

| Name        | Type   | Optional |
|-------------|--------|----------|
| title       | String | Yes      |
| description | String | Yes      |
| url         | String | Yes      |
| keywords    | String | Yes      |
| image       | String | Yes      |

## Returns

### titleTag

```jsx
<title>My App</title>
```

### metaTags

```jsx
<meta name="description" content="This app is awesome!" />
<meta name="keywords" content="Awesome, App, React" />
<meta property="og:image" content="https://www.myawesomeapp.io/images/logo.png" />
...
```


