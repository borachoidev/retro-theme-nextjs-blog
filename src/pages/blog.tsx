import { getAllTags, getPostFrontmatters } from '@utils/files'
import { PostPreview } from 'src/type'
import ContentContainer from '@components/content_container'
import Tag from '@components/tag'
import PostPreivew from '@components/post_preview'
import styles from './post_list.module.css'
import Link from 'next/link'

const PostLists = ({
  posts,
  tags,
}: {
  posts: PostPreview[]
  tags: string[]
}) => {
  return (
    <main>
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',
          padding: '24px 0px',
        }}
      >
        <Tag text="ALL" active={true} />

        {tags.map((tag, i) => (
          <Link href={`/tag/${tag}`} key={i}>
            <a>
              <Tag text={tag} />
            </a>
          </Link>
        ))}
      </div>

      <ContentContainer>
        <ul className={styles.postsWrapper}>
          {posts.map((post, index) => (
            <li key={index}>
              <PostPreivew post={post.frontmatter} />
            </li>
          ))}
        </ul>
      </ContentContainer>
    </main>
  )
}

export default PostLists

export const getStaticProps = async () => {
  const posts = await getPostFrontmatters('blog')
  const tags = await getAllTags('blog')

  return {
    props: { posts, tags },
  }
}
