import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Loader from '../components/Loader';
import 'bulma/css/bulma.min.css';

import { mainBody } from "../editable/config";

export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Welcome | DERMOT OBRIEN</title>
        <meta name="description" content="Hello, I'm Dermot O'Brien. I'm a fullstack developer with particular interests in security and startups." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <section className="middleScreen">
          <h1 className={styles.title}>
            Hello, I'm <a>Dermot O'Brien</a>. <br /> <br />
            I'm an entrepreneur and fullstack developer.
          </h1>
        </section>
        <div className="middleScreen">
          <section className={styles.title}>
            <h1 className="is-size-1 is-uppercase has-text-weight-bold">
              <a>{mainBody.firstName} {mainBody.lastName}</a>. <br />

            </h1>
            <div className="is-size-5">
              I'm an entrepreneur and fullstack developer.
            </div>
          </section>
        </div>

      <div>
        <Loader show />
      </div>


        <p className={styles.description}>
          Lorem ipsum dolor sit amet  
          <code className={styles.code}>let x = 5</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
