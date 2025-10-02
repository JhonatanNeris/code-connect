import CardPost from "@/components/CardPost";

type ResponseApi = {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number | null;
  items: number;
  data: Post[];
}

type Post = {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  }

}

const getAllPosts = async (page: number): Promise<ResponseApi> => {
  const res = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if (!res.ok) {
    console.log("Falha na requisição.")
    return {
      first: 1,
      prev: null,
      next: null,
      last: 0,
      pages: 0,
      items: 0,
      data: [],
    };
  }

  console.log("TESTANDO RESPOSTA",res)
  return res.json()
}

export default async function Home() {

  const { data: posts } = await getAllPosts(1)
  console.log(posts)

  return (
    <main className="flex flex-wrap justify-between gap-6">
      {posts && posts.length > 0 ? (
        posts.map((post) => <CardPost key={post.id} {...post} />)
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
      <div>

      </div>
    </main>
  );
}
