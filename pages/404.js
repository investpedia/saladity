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

/*
Using Next.js 9 or above you can get query parameters:

With router:

import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const {id} = router.query

  return(<div>{id}</div>)
}
With getInitialProps:

const Index = ({id}) => {
  return(<div>{id}</div>)
}

Index.getInitialProps = async ({ query }) => {
  const {id} = query

  return {id}
}
*/

/*
For stateless components
import Link from 'next/link'
const About = ({query}) => (
  <div>Click <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>
)

About.getInitialProps = ({query}) => {
  return {query}
}

export default About;

For regular components
class About extends React.Component {

  static getInitialProps({query}) {
    return {query}
  }

  render() {
    console.log(this.props.query) // The query is available in the props object
    return <div>Click <Link href={{ pathname: 'about', query: { name: 'leangchhean' }}}><a>here</a></Link> to read more</div>

  }
}
*/

/*
// pages/about.js
import Link from 'next/link'
export default ({ url: { query: { name } } }) => (
  <p>Welcome to About! { name }</p>
)
*/

/*
import React from "react";

export async function getServerSideProps(context) {
    const page = (parseInt(context.query.page) || 1).toString();
    // Here we got the "page" query parameter from Context
    // Default value is "1"
  
    const res = await fetch(`https://....com/api/products/?page=${page}`);
    const products = await res.json();
    return {props: {products: products.results}}
    // will be passed to the page component as props
  }

const Page = (props) =>{
    const products = props.products;
    return (
      <ul>
        {products.map((product) => (
            <li key={product.id}>{product.name}</li>
        ))}
      </ul>);
}

export default Page
*/

