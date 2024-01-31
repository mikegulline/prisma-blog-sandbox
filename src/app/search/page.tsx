import paths from '@/paths';
import { redirect } from 'next/navigation';
import { fetchPostsBySearchTerm } from '@/db/queries/posts';
import PostList from '@/components/posts/post-list'

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) redirect(paths.home());
  return <div>
    <PostList fetchData={() => fetchPostsBySearchTerm(term)} />
    </div>; 
}
