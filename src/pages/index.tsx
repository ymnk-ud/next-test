import * as React from 'react';
import { NextPage } from 'next';
import Head from 'next/head'

import Layout from '../components/layout';
import siteTitle from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <div>
        <Link href="/posts/first-post">
          <a>first post</a>
        </Link>
      </div>
      <div>
        <Link href="/time">
          <a>getInitialProps page</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Home;
