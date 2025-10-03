import CardPost from "@/components/CardPost";
import Link from "next/link";

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

  return res.json()
}

// Tipagem explícita do parâmetro da página:
type PageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};


export default async function Home({ searchParams }: PageProps) {

  const currentPage = Number(searchParams?.page) || 1;

  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main className="flex flex-wrap justify-between gap-6">
      {posts && posts.length > 0 ? (
        posts.map((post) => <CardPost key={post.id} {...post} />)
      ) : (
        <p>Nenhum post encontrado.</p>
      )}

      <div className="grow text-center">
        {prev && <Link href={`?page=${prev}`} className="text-[#81FE88] underline leading-[1.5]">Página anterior</Link>}
        {next && <Link href={`?page=${next}`} className="text-[#81FE88] underline leading-[1.5]">Próxima página</Link>}
      </div>
      
    </main>
  );
}
