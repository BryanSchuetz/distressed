//Sveltekit load function to import a markdown file matching the slug and return its content, title, and date
export async function load({ fetch, params }) {
  const post = await import(`../${params.slug}.md`)
  const { title, date, tags, category } = post.metadata
  const response = await fetch(`/api/posts`)
  const allPosts = await response.json()
  const posts = allPosts.filter(post => post.meta.category.includes(category))
  const content = post.default
  console.log(posts)
  return {
    content,
    title,
    date,
    tags,
    category,
    posts
  }
}