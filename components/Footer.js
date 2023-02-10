import React from 'react';
import { GITHUB_URL } from './constants/constants';
import { FaGithub, FaMailBulk } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className='w-screen fixed bottom-0 dark:bg-green-300 bg-white h-[140px] flex justify-center border-t-blue-200 border-t-[1px]'>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <a href={GITHUB_URL}>
                        <FaGithub className='text-[40px] m-2 text-black' />
                    </a>
                    <a href={`mailto:${GITHUB_URL}`}>
                        <FaMailBulk className='text-[40px] m-2 text-black' />
                    </a>
                </div>

                <div className='flex items-center'>
                    <p className='font-thin text-sm m-2'>sungjeen</p>
                    <p className='font-thin text-sm'>© 2023</p>
                    <p className='font-thin text-sm m-2'>MY Blog</p>
                </div>
            </div>
        </footer>
    );
}
