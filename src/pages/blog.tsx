import { getAllTags, getPostFrontmatters } from '@utils/files'
import { PostPreview } from 'src/type'
import ListLayout from 'src/layouts/list'
import { ReactElement } from 'react'
import PostPreivew from '@components/post_preview'
import BaseLayout from 'src/layouts/base'

interface PostListProps {
  posts: PostPreview[]
  tags: string[]
}
const PostLists = ({ posts }: PostListProps) => (
  <ul>
    {posts.map((post, index) => (
      <li key={index}>
        <PostPreivew post={post.frontmatter} />
      </li>
    ))}
  </ul>
)

export default PostLists

export const getStaticProps = async () => {
  const posts = await getPostFrontmatters('blog')
  const tags = await getAllTags('blog')

  return {
    props: { posts, tags },
  }
}

PostLists.getLayout = function getLayout(page: ReactElement) {
  const { tags } = page.props
  return (
    <BaseLayout>
      <ListLayout tags={tags} selected={'ALL'}>
        {page}
      </ListLayout>
    </BaseLayout>
  )
}
