export type BlogFrontMatter = {
  title: string
  date: string
  tag: string | string[]
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
