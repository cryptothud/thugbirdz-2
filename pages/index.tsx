import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thugbirdz</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fec600" />
        <meta name="fortmatic-site-verification" content="j93LgcVZk79qcgyo" />
        <meta property="og:url" content="/" />
        <meta property="og:title" content="Thugbirdz" />
        <meta property="og:description"
          content="caw caw" />
        <meta property="og:image" content="/banner.png" />
        <meta name="twitter:title" content="Thugbirdz" />
        <meta name="twitter:description"
          content="caw caw" />
        <meta name="twitter:image" content="/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>


      <div className="App">
        <svg
          version="1.2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1500 1101"
          width="1500"
          height="1101"
        >
          <g id="Layer 1">
            <path
              id="Path 1"
              className="s0"
              d="m48 428.6l1398.4 5 4.9 267.9h-428.6v-126.6h-126.6v126.6h-428.6v-126.6l-413.9-4.9-2.8-70.7z"
            />
          </g>
        </svg>
        <h1>website dropping soon.</h1>
      </div>
    </div>
  )
}
