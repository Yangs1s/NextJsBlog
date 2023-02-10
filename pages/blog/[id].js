import React from 'react';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import CodeBlock from '@/components/CodeBlock';
import dynamic from 'next/dynamic';
import { siteTitle } from 'pages/_document';


const Button = dynamic(() => import('@/components/Button'), {
    loading: () => <div className='w-10 bg-red-100'>loading...</div>
})

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: true,

    };
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}


const components = { Button, CodeBlock }

const Post = ({ postData }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading........</div>
    }
    return (
        <>
            <Head>
                <title>
                    {`${postData.title} - ${siteTitle}`}
                </title>
            </Head>
            <article className='bg-inherit'>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div>
                    <strong>TAG:</strong>
                    <span className='w-auto px-2 rounded-lg ml-1 bg-white dark:bg-emerald-300 font-bold'>{postData.tag}</span>
                </div>
                <br />

                <br />
                {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
                {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} />}
            </article>

        </>
    );
};

export default Post;