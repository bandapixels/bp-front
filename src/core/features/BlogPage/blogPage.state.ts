export interface BlogPageState {
  posts: {
    head: string;
    excerpt: string;
    image: string;
    created_at: string;
    slug: string;
    url: string;
    tags: {
      name: string;
    }[];
  }[];
}
