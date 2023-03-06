import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout></Layout>
    </div>
  );
};

export default Home;
