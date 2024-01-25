import Link from 'next/link';
import { Chip } from '@nextui-org/react';
import { db } from '@/db/index';
import paths from '@/paths';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topichShow(topic.slug)}>
          <Chip color='warning' variant='shadow'>
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });
  return <div className='flex flex-row flex-wrap gap-2'>{renderTopics}</div>;
}
