import React from 'react'
// import type { NextPage } from 'next'
import Head from 'next/head'
import { PostCard, PostWidget, Categories } from '../components'
import { getPosts } from '../services'

const Home = ({ posts }: any) => {
  return (
    <div className="container mx-auto px-10 mb-8 h-full min-h-screen">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post: { node: any; title: string }) => (
            <PostCard post={post.node} key={post?.title} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }
}