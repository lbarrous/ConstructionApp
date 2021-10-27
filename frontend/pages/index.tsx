import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CompanyTable from '../components/Table/Table';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Construction Companies</title>
        <meta name='description' content='Construction companies app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Construction companies</h1>
        <CompanyTable />
      </main>
    </div>
  );
};

export default Home;
