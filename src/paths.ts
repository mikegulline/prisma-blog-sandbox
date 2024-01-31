const paths = {
  home() {
    return '/';
  },
  topichShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
  searchShow(term: string) {
    return `/search?term=${term}`;
  },
};

export default paths;
