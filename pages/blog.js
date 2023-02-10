import React from 'react';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/Date';
import { getSortedPostsData } from '../lib/posts';
import { siteTitle } from './_document';
import Head from 'next/head';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        }
    }
}

export default function blog({ allPostsData }) {
    return (
        <>
            <Head>
                <title>
                    {siteTitle}
                </title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className='font-extrabold text-[30px] divide-y divide-solid'>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, tag, date, title }) => (
                        <li className='w-92 h-32' key={id}>
                            <Link href={`blog/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                            <br />
                            <span className='w-auto bg-white dark:bg-green-200 px-1 py-0.5 text-sm rounded-lg text-zinc-600 font-semibold'>{tag}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

