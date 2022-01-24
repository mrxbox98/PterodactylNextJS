import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import React from 'react'
import ServerRows from '../components/ServerRows.server'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            test
            <React.Suspense fallback={}>
                <ServerRows>

                </ServerRows>
            </React.Suspense>
        </div>
    )
}

export default Home
