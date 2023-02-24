import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';
import Link from 'next/link';

import { BLOG_TITLE } from '../../global';
const tit = global.BLOG_TITLE;
const hom = global.HOME;

// dont change getStaticPaths() and getStaticProps()
export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (   
    <div className='prose md:prose-lg lg:prose-xl rounded-lg bg-gradient-to-b from-gray-100 to-gray-200 prose-pre:bg-slate-600 prose-pre:text-zinc-100 px-4 grid grid-cols-1 mx-auto flex-1 w-full mb-8'> 
        <Head>
          <title>{tit} | {frontmatter.title}</title>   
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={frontmatter.description} key="desc"/>
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:description" content={frontmatter.article} />
        </Head>
        <h1 className='flex justify-between'>
          <span className='bg-gradient-to-b from-gray-500 to-black text-white rounded-lg mr-4 px-2'>{frontmatter.id} </span>
          <span className='text-2xl font-medium'>{frontmatter.title}</span>
          <div className='text-sm font-medium'>
          <small className='text-blue-400 uppercase'>{frontmatter.article}</small>
          <p className='text-gray-500'>
            Created by: <Link href={frontmatter.auther_bio}>
              <a className='text-no-decoration'>{frontmatter.auther}</a>
            </Link>
          </p> 
          </div>
        </h1>      
        <div className='homeSlug shadow-lg grid grid-cols-1 px-2' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <nav className='rounded-md w-full text-sm mt-4 flex justify-between'>
          <span className='text-gray-400'>article: {frontmatter.article}</span> 
          <span className='text-gray-400'>create / edit : {frontmatter.modified_date}</span> 
          <span className='text-gray-400'>tags: {frontmatter.tag}</span>
        </nav>
        <nav className='rounded-md w-full mt-4 flex justify-center text-sm'>
            <span><Link href={hom}><a className='text-sky-600 hover:text-sky-500 font-bold'>Home</a></Link></span> {/* change /blog to /your-repo */}
            <span className='text-gray-500 mx-2'>/ Solidity from scratch /</span>
            <span className='text-gray-500'>{frontmatter.id} - {frontmatter.title}</span>
        </nav>

      </div>
      
  );
}
