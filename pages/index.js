import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Journey Through Music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/music.png" />
        <p className={styles.description}>
          You've been specially invited to
        </p>

        <h2 className={styles.description}>
          "Journey Through Music"
        </h2>

      <div className="bodyText">
        <p>
          an evening of music that celebrates the journey of piano students through their learning years.
        </p>
        <p>
          The concert will take you on a heartfelt journey that not only explores the power of music but showcases that themes of love, strength and collaboration
        </p>
        <p>
          Eunice will reach out to you soon with more details of the concert, meanwhile do help us by filling in the RSVP
        </p>
        </div>

        
      </main>

      <style jsx>{`
        * {
          background-color: #F1F0ED;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        .bodyText {
          flex: 1;
          display: flex;
          width: 50%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        p {
          line-height: 2;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
