import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from "next/head";

export default function Write() {
    const router = useRouter()
    const idRef = useRef(undefined)
    const titleRef = useRef(undefined)
    const contentRef = useRef(undefined)
    const tagRef = useRef(undefined)

    const [showLink, setShowLink] = useState(false)

    useEffect(() => {
        console.log(router.query)
    }, [router.query])
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = idRef.current.value
        const title = titleRef.current.value
        const content = contentRef.current.value
        const tag = tagRef.current.value
        if (id && title && content && tag) {
            fetch('/api/post/write', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    id, title, content
                })
            }).then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fetch Error')
            })
                .then(data => {
                    setShowLink(true)
                    alert(data.message)
                }
                )
                .catch((error) => alert(`response error : ${error}`))
        }
    }

    return (
        <>
            <Head>
                <title>
                    Write a Post
                </title>
            </Head>
            <h1 className="font-extrabold mt-10">
                Write a post
            </h1>

            <form className="w-[500px] bg-red-400 p-6 rounded-lg" onSubmit={handleSubmit}>
                <input type="text" name="id" className="p-1" placeholder="id" required ref={idRef} />
                <br />
                <br />
                <input type="text" name="title" className="p-1" placeholder="tilte" required ref={titleRef} />
                <br />
                <br />
                <input type="text" name="tag" className="p-1" placeholder="tag" required ref={tagRef} />
                <br />
                <br />
                <textarea type="text" name="content" placeholder="content" className="w-96 h-52 resize-none" required ref={contentRef} />
                <br />
                <br />
                <input className="w-11 bg-slate-100 p-1 rounded-md" type="submit" />
            </form>


            {showLink && <Link href={`/posts/${idRef.current.value}`}>Created Post</Link>}
        </>
    );
}
