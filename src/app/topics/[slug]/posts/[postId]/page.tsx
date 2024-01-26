import PostShow from '@/_components/posts/post-show';
import Link from 'next/link';
import paths from '@/paths';
import CommentCreateForm from '@/_components/comments/comment-create-form';
import CommentList from '@/components/comments/comment-list';

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;
  return (
    <div>
      <Link
        className='underline decoration-solid'
        href={paths.topichShow(slug)}
      >
        {'<-- '} Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} startOpen />
      <CommentList postId={postId} />
    </div>
  );
}
