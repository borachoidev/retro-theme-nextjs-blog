export type BlogFrontMatter = {
  title: string
  date: string
  tags: string | string[]
  description: string
  draft: boolean
}

export type AboutFrontMatter = {
  name: string
  avatar: string
  email: string
  github: string
}

export type PostPreview = {
  slug: string
  frontmatter: BlogFrontMatter
}

export type PostType = 'blog' | '_about'
