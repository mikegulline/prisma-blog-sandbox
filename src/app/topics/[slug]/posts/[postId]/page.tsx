import { db } from '@/_db';

interface PostShowPageProps {
  params: {
    postId: string;
  };
}

export default function PostShowPage(props: PostShowPageProps) {
  return <div>Post page for id: {props.params.postId}</div>;
}
