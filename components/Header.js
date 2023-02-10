import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { CiDark } from 'react-icons/ci'
import { FaSun } from 'react-icons/fa'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData,
        }
    }
}

const Header = () => {
    const [theme, setTheme] = useState(() => typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' ? 'dark' : 'light' : 'light')

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('body').classList.add('dark')
        } else {
            document.querySelector('body').classList.remove('dark')
        }
    }, [theme])

    const handleClick = () => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
            setTheme('light')
        } else {
            localStorage.setItem('theme', 'dark');
            setTheme('dark')
        }
    }
    return (
        <header className='w-[100vw] bg-slate-50 h-auto flex items-center dark:bg-green-300' >
            <Link href={'/'} className='text-black font-extrabold px-5 py-3 text-lg'>{'SUNGJEEN' + `'` + 'S'}</Link>

            <div className='flex w-auto ml-auto mr-10 font-bold items-center '>
                <button className='w-30 px-2' onClick={handleClick}>
                    {theme === 'dark' ? <CiDark className='w-[32px] h-[32px] text-black' /> : <FaSun className='w-[32px] h-[32px] text-yellow-400' />}
                </button>
                <Link href={`/blog`} className='m-2 dark:text-slate-600'>Blog</Link>
                <Link href={`/tags`} className='dark:text-slate-600'>Tag</Link>
            </div>
        </header>
    );
};

export default Header;