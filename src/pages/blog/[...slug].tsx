import ContentContainer from '@components/content_container'
import Tag from '@components/tag'
import { formatSlug } from '@utils/commons'
import { getFiles, getPostBySlug } from '@utils/files'
import { GetStaticProps } from 'next'
import React, { ReactElement } from 'react'
import BaseLayout from 'src/layouts/base'

const PostPage = ({ frontmatter, content }: any) => {
  const { title, date, tags } = frontmatter
  return (
    <ContentContainer>
      <h1>{title}</h1>
      <div>
        <div>
          {tags.map((tag: string) => (
            <Tag text={tag} small key={tag} />
          ))}
        </div>

        <time> {date}</time>
      </div>
      <hr></hr>
      <section>
        <main>{content}</main>
      </section>
    </ContentContainer>
  )
}

export default PostPage

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return {
      notFound: true,
    }
  }

  let slug = ''

  if (typeof params!.slug === 'string') {
    slug = params.slug
  } else {
    slug = params!.slug.join('/')
  }

  const { frontmatter, content } = await getPostBySlug(`/blog/${slug}.md`)

  return {
    props: { frontmatter, content },
  }
}

export async function getStaticPaths() {
  const posts = await getFiles('blog')

  return {
    paths: posts.map(post => ({
      params: {
        slug: formatSlug(post).split('/'),
      },
    })),
    fallback: false,
  }
}

PostPage.getLayout = (page: ReactElement) => {
  return <BaseLayout>{page}</BaseLayout>
}
