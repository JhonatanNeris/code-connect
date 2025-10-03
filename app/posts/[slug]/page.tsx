
async function getPostsBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log('Ops, alguma coisa correu mal');
    return {};
  }
  console.log('Posts obtidos com sucesso');
  const data = await response.json();
  if (data.length === 0) {
    return {};
  }
  return data[0];

  
}

const Post = async ({ params }: { params: { slug: string } }) => {
    const slug = params.slug
    const post = await getPostsBySlug(slug)
    return (
        <>
        <p className="text-white">

            {post.body}
        </p>
        </>
    )
}
export default Post;