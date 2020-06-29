import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import { NextPage } from 'next';
import unfetch from 'isomorphic-unfetch';

interface Props {
    time: string;
}

const TimeSample: NextPage<Props> = ({ time }) => {
    return (
        <Layout>
            <Head>
                <title>Build time? Request time?</title>
            </Head>
            <h1>Build time? Request time?</h1>
            <div>
                <p>{time}</p>
            </div>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

TimeSample.getInitialProps = async () => {
    const res = await unfetch("http://localhost:3000/api/util/time");
    const data = await res.json();
    console.log(data);
    return { time: data.now };
}

export default TimeSample;
