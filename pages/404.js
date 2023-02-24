// export default function Custom404() {
//   return <h1 className='text-center mx-auto w-full font-bold text-2xl '>404 - Page Not Found</h1>
// }

// pages/404.js
import Link from 'next/link';

// import styles from '../styles/404.module.css'; // {/*styles.container*/}{styles.searchBox}{styles.link}

const NotFoundPage = () => {
  return (
    <>
      <div className='prose grid grid-1 text-center mx-auto'>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <p>
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input
          type='search'
          className= 'border border-gray-300 rounded p-2'
          placeholder='Search here or go to another page...'
          disabled
        />
        <div className='my-12 flex justify-between'>
          <Link href='/' className=''>
            <a className='text-sky-500'>Homepage</a>
          </Link>
          <Link href='/' className=''>
            <a className='text-sky-500'>Latest Posts</a>
          </Link>
          <Link href='/' className=''>
            <a className='text-sky-500'>Contact US</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
