import Provider from 'components/Provider'
import { AppProps } from 'next/app'
import Head from 'next/head'
import '../../styles/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>NextJs - Boilerplate</title>
        <link
          rel="shortcut icon"
          href="/images/icon-512.png"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/images/icon-512.png"
          type="image/x-icon"
        />
        <meta name="title" content="NextJs - Boilerplate" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="We want to hear from you!Take our 2021 Community Survey! Try out a preview of the new React Docs! beta.reactjs.org · React DocsTutorialBlogCommunity."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="NextJs - Boilerplate" />
        <meta
          property="og:description"
          content="We want to hear from you!Take our 2021 Community Survey! Try out a preview of the new React Docs! beta.reactjs.org · React DocsTutorialBlogCommunity."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="NextJs - Boilerplate" />
        <meta
          property="twitter:description"
          content="We want to hear from you!Take our 2021 Community Survey! Try out a preview of the new React Docs! beta.reactjs.org · React DocsTutorialBlogCommunity."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
