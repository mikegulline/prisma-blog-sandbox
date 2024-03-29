import PostCreateForm from '@/_components/posts/post-create-form';
import { Divider } from '@nextui-org/react';
import { fetchPostsByTopicSlug } from '@/_db/queries/posts';
import PostList from '@/_components/posts/post-list';
interface TopicsShowPageProps {
  params: {
    slug: string;
  };
}
export default async function TopicsShowPage({ params }: TopicsShowPageProps) {
  const { slug } = params;

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='text-2xl font-bold mb-2'>{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div className='border shadow py-3 px-2'>
        <PostCreateForm slug={slug} />
        <Divider className='my-2' />
        <h3 className='text-lg'>Topics</h3>
      </div>
    </div>
  );
}
