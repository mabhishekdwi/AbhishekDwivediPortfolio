import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout  from '../components/Layout/Layout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abhishek Dwivedi - Portfolio</title>
        <meta name="description" content="Full stack QA" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>

      <Layout />
      <div id="toast-root"></div>
    </div>
  )
}
