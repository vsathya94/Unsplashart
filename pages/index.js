/* eslint-disable */

// Import necessary components and styles
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// Home component
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Head section for metadata */}
      <Head>
        <title>Your Name - Personal Website</title>
        <meta name="description" content="Your lovely website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main content */}
      <main className={styles.main}>
        {/* Landing page section */}
        <section className={styles.landing}>
          <h1 className={styles.title}>
            Welcome to the <a href="https://saisatyanarayana.in/">Dutta's</a> Website!
          </h1>
          <p className={styles.description}>
            Add a catchy tagline or introduction here. Who are you?
          </p>
          {/* Text and image section */}
          <div className={styles.textImageSection}>
            <p>
              Write about yourself, your interests, or anything you'd like to share. What values do you stand for?
            </p>
            <Image
              src="/dutta's pic.png" // Replace with the path to your image
              alt="Your Image"
              width={600} // Adjust the width as needed
              height={400} // Adjust the height as needed
            />
          </div>
        </section>

        {/* Subpages section */}
        <section className={styles.subpages}>
          {/* Links to subpages */}
          <div className={styles.grid}>
            {/* ... (unchanged) */}
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Kaleidoscope and {' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
