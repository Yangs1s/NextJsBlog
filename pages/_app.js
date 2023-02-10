import Layout from '@/components/Layout';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';



export default function App({ Component, pageProps }) {
    const router = useRouter();

    const [visitedTime] = useState(new Date())

    return (
        <Layout home={router.pathname === '/' | router.pathname === '/blog'}>
            <div>
                <span>
                    visited:
                    {formatDistanceToNow(new Date(visitedTime), {
                        addSuffix: true,
                        includeSeconds: true
                    })} 방문
                </span>
            </div>
            <Component {...pageProps} pathname={router.pathname} />
        </Layout>
    )
}