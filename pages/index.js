import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';
export default function Home() {
  const posts = [
    {title: 'React Testing', excerpt: 'Learn React Testing'},
    {title: 'React Testing2', excerpt: 'Learn React Testing2'},
  ];
  return (
    <div className="container px-10 mx-auto mb-">
      <Head>
        <title>ZJX's World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => <PostCard post={post} key={post.title} />)}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}
