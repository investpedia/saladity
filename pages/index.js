import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

// change blog name and description 
import { BLOG_TITLE , BLOG_DESCRIPTION } from '../global';
const gtit = global.BLOG_TITLE;
const gdesc = global.BLOG_DESCRIPTION;


// don`t touch`
export async function getStaticProps() {
  
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
  return (
    
    
    <div className='justify-center'> 
      
          <section className="">
              <h1 className='bg-gradient-to-l from-purple-700 to-indigo-500 text-white text-center font-bold text-3xl w-full rounded shadow p-2'>
                {gtit}
                <p className='text-sm font-medium'>{gdesc}</p>
              </h1>
              {/* <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-2 my-12 px-4 box-border mx-auto before:box-inherit after:box-inherit"> */}
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 my-12 px-2 box-border mx-auto before:box-inherit after:box-inherit">
              {/* <h2 className='my-2 shadow-xl text-2xl font-bold mx-auto bg-indigo-400 text-white p-2 rounded-lg'>{gdesc}</h2> */}
              {posts.map(({ slug, frontmatter }) => (
                  <div key={slug} className='break-inside px-1 py-1 my-0.5 bg-gradient-to-l from-blue-700 to-sky-500 hover:bg-gradient-to-l hover:from-blue-800 hover:to-sky-600 rounded-lg '>
                      <Head>
                        <title>{gtit}</title>   
                        <link rel="icon" href="@@baseUrl@@/images/000.png" />
                        <meta name="robots" content="all" />
                        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                        <meta name="google" content="notranslate" key="notranslate" />
                        <meta name="description" content= "Auther: mosi-sol @ github. Solidity blog: web3, blockchain, solidity, evm, programming." />
                      </Head>

                      <article className='mx-4 h-12 md:h-12 lg:h-6'>
                        <Link href={`/post/${slug}`}><a className='text-white hover:text-gray-300 flex justify-between'>
                        <h3 className='text- font-bold'>{frontmatter.id} - {frontmatter.title}</h3>
                        <p className='text-sm'>{frontmatter.auther}</p>
                        </a></Link>
                      </article>
                      {/* {frontmatter.tag}{frontmatter.auther}{frontmatter.auther_bio}{frontmatter.modified_date} */}
                      {/* {frontmatter.description}{frontmatter.id}{frontmatter.date}{frontmatter.article} */}

                  </div> 
                ))}

              </div>
            </section>


    </div>
    
  );
}
