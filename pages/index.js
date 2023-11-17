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
        <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Main Page</title>
       <!-- Add your CSS file or styles here -->
       /* <title>Your Name - Personal Website</title> */
       /*  <meta name="description" content="Your lovely website description" />  */
       /*  <link rel="icon" href="/favicon.ico" /> */
    
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
              height={600} // Adjust the height as needed
            />
          </div>
        </section>

        {/* Subpages section */}
        <section className={styles.subpages}>
          {
            <nav>
              <ul>
              <li><a href="subpage1.html">Subpage 1</a></li>
              <li><a href="subpage2.html">Subpage 2</a></li>
            </ul>
          </nav>
          }
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
