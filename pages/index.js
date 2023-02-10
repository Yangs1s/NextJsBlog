import Head from 'next/head';
import Layout, { siteTitle } from '../pages/_document';
import utilStyles from '../styles/utils.module.css';
import { MAIL_URL } from '../components/constants/constants';
//ssg

//ssr
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     }
//   }
// }
const name = '양성진'
const age = '32살'
const address = '인천 서구 신현동'
export default function Home({ allPostsData }) {
  //CSR
  // const [allPostsData, setAllPostsData] = useState([])
  // useEffect(() => {
  //   fetch('api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllPostsData(data.allPostsData))
  // }, [])


  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className='flex flex-col m-auto w-[400px] divide-y-2 divide-black bg-slate-100 rounded-lg p-3'>
          <h1 className='font-extrabold text-3xl '>WHO ARE YOU?</h1>
          <p className='font-extrabold'>NAME</p> {name}
          <br />
          <p className='font-extrabold'>AGE </p> {age}
          <br />
          <p className='font-extrabold'>EMAIL </p> {MAIL_URL}
          <br />
          <p className='font-extrabold'>ADDRESS </p> {address}
          <br />
          <p></p>
        </div>
      </section>

    </>
  );
}