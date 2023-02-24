import Link from 'next/link';
import Image from 'next/image';
import { BLOG_TITLE , BLOG_DONATION } from '../global';

const lin = global.BLOG_DONATION;
const tit = global.BLOG_TITLE;

export default function Layout({ children }) {
  return (
    
    <div className='flex flex-col min-h-screen bg-gradient-to-l from-purple-100 to-indigo-100'>
      <nav className="navbar navbar-expand-lg shadow py-2 bg-gradient-to-t from-gray-100 to-gray-200 relative flex items-center w-full justify-between mb-8 top-0 sticky">
          <div className="px-6">    
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
            <ul className="navbar-nav mr-auto flex flex-row">
              <li className="nav-item">
                <Link href='/'>
                  <a className=''>
                    {/* <h3 className="block pr-2 lg:px-2 py-2 text-sky-300 hover:text-gray-700 mr-5 text-xl border border-gray-300 rounded-lg font-bold">{tit}</h3> */}
                    <Image src='/images/solidity.webp' width={100} height={50} alt='solidity by mosi-sol' />
                  </a>
                </Link>
              </li> 
              {/*<li className="nav-item">
                <Link href='/resume'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-sky-300 hover:text-black">Resume</a>
                </Link>
              </li>     */}  
              {/* change this address */}  
              {/* 
              <li className="nav-item">
                <Link href='/'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Github</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/'> 
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Linkedin</a>
                </Link>
              </li>
              */}
            </ul>
            </div>	
          </div>
          <div className='px-6'>
            <Link href={lin}><a target="_blank" className='bg-gray-300 py-1 px-3 rounded-xl hover:bg-sky-600 hover:text-white'>donate</a></Link>
          </div>
        </nav>
      <main className='container mx-auto flex-1 w-full my-4'>{children}</main>
      <footer className='text-center lg:text-left mt-8 bg-gradient-to-l from-purple-100 to-indigo-100 text-white font-bold border border-t-1 border-gray-300'>
        <div className='text-black text-center p-4'>© 2017-2023 &nbsp;|&nbsp; {tit}</div> 
      </footer>
    </div>
    
  );
}
