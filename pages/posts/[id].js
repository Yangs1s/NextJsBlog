import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import CodeBlock from '../../components/CodeBlock';

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
const Button = ({ children }) => {
    return (
        <button className='w-[140px] h-12 text-lg text-green-700 bg-blue-100 p-3 rounded-lg dark:bg-red-300 dark:text-purple-900' onClick={() => alert(`thanks to ${children}`)}>{children}</button>
    )
}

const components = { Button, CodeBlock }

const Post = ({ postData }) => {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading........</div>
    }
    return (
        <Layout>
            <Head>
                <title>첫번째 글</title>
            </Head>
            <article className='bg-inherit'>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <br />
                {postData.contentHtml && <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
                {postData.mdxSource && <MDXRemote {...postData.mdxSource} components={components} />}
            </article>

        </Layout>
    );
};

export default Post;