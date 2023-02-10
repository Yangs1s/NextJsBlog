import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

import Utterances from './Utterances';
import Header from './Header'
import Footer from './Footer';

const name = 'YANG SUNGJEEN';

export default function Layout({ children, home }) {

    return (
        <>
            <main className="bg-pink-100 text-gray-800 dark:bg-black dark:text-gray-200 h-[120vh]">
                <Header />
                <div className={styles.container}>
                    <header className={styles.header}>
                        {home ? (
                            <>
                                <Image
                                    priority
                                    src="/images/profile.jpeg"
                                    className={utilStyles.borderCircle}
                                    height={144}
                                    width={144}
                                    alt=""
                                />
                                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                            </>
                        ) : (
                            <>
                                <Link href="/">
                                    <Image
                                        priority
                                        src="/images/profile.jpeg"
                                        className={utilStyles.borderCircle}
                                        height={108}
                                        width={108}
                                        alt=""
                                    />
                                </Link>
                                <h2 className={utilStyles.headingLg}>
                                    <Link href="/" className={utilStyles.colorInherit}>
                                        {name}
                                    </Link>
                                </h2>
                            </>
                        )}
                    </header>
                    <main>{children}</main>
                    {!home && (
                        <>
                            <Utterances />
                            <div className={styles.backToHome}>
                                <Link href="/">← Back to home</Link>
                            </div>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
}