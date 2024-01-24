interface TopicsShowPageProps {
  params: {
    slug: string;
  };
}
export default function TopicsShowPage(props: TopicsShowPageProps) {
  return <div>Topics Show Page for Slug: {props.params.slug}.</div>;
}
