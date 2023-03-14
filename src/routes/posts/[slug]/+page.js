//Sveltekit load function to import a markdown file matching the slug and return its content, title, and date
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`)
  const { title, date, tags } = post.metadata
  const content = post.default

  return {
    content,
    title,
    date,
    tags
  }
}