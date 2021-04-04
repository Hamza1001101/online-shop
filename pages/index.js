import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from "../products.json";
import { initiatePayment } from '../lib/payment'

export default function Home() {
   
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Space Jelly Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Space Jelly Shop</h1>

        <p className={styles.description}>
          Welcome to the best Jellyfish swag on the Universe
        </p>

        <ul className={styles.grid}>
          {products.map(({ id, image, title, price, description }) => {
            return (
              <li key={id} className={styles.card}>
                <a href="#">
                  <img src={image} alt={title} />
                  <h3> {title} </h3>
                  <h4>{price} SEK </h4>
                  <p>{description}</p>
                </a>
                <p>
                  <button className={styles.button}
                    onClick={() => {
                      initiatePayment({
                        lineItems: [
                          {
                            price: id,
                            
                            quantity: 1
                      }
                    ]
                  })}}
                  >Buy Now</button>
                </p>
              </li>
            );
          })}
        </ul>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
