import { getAllTags, getPostFrontmatters } from '@utils/files'
import { PostPreview } from 'src/type'
import ListLayout from 'src/layouts/list'
import { kebabCase } from '@utils/commons'
import { GetStaticProps } from 'next'
import PostPreivew from '@components/post_preview'
import { ReactElement } from 'react'
import BaseLayout from 'src/layouts/base'

const TagList = ({ posts }: { posts: PostPreview[] }) =>
  posts.map((post, index) => (
    <li key={index}>
      <PostPreivew post={post} />
    </li>
  ))

export default TagList

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params)
    return {
      notFound: true,
    }

  const allPosts = await getPostFrontmatters('blog')
  const tags = await getAllTags('blog')

  const filteredPosts = allPosts.filter(post => {
    const tags =
      typeof post.frontmatter.tags === 'string'
        ? [post.frontmatter.tags]
        : post.frontmatter.tags

    return (
      post.frontmatter.draft !== true &&
      tags.map(t => kebabCase(t)).includes(params.tag as string)
    )
  })

  return {
    props: { posts: filteredPosts, tags, category: params.tag },
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags('blog')

  return {
    paths: tags.map(tag => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

TagList.getLayout = function getLayout(page: ReactElement) {
  const { tags, category } = page.props
  return (
    <BaseLayout>
      <ListLayout tags={tags} selected={category}>
        {page}
      </ListLayout>
    </BaseLayout>
  )
}
