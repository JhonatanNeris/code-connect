import CardPost from "@/components/CardPost";

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

// const post =
// {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//     "id": 101,
//     "name": "Ana Beatriz",
//     "username": "anabeatriz_dev",
//     "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }

const getAllPosts = async (page: number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3042/posts?page=${page}&_limit=6`)
  if(!res.ok){
    console.log("Falha na requisição.")
    return []
  }

  console.log(res)
  return res.json()
}

export default async function Home() {

  const posts = await getAllPosts(2)

  return (
    <main className="flex flex-wrap justify-between gap-6">
      {posts.length > 0 ? (
        posts.map((post) => <CardPost key={post.id} {...post} />)
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
      <div>
        
      </div>
    </main>
  );
}
