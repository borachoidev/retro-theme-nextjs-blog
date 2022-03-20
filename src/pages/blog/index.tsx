import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getFiles } from '@utils/files'
import { PostPreview } from 'src/type'
import ContentContainer from '@components/content_container'
import Tag from '@components/tag'
import PostPreivew from '@components/post_preview'
import styles from '@styles/postList.module.css'

const PostLists = ({ posts }: { posts: PostPreview[] }) => {
  return (
    <main>
      <div
        style={{
          display: 'flex',

          justifyContent: 'center',
          padding: '24px 0px',
        }}
      >
        <Tag text="java script" active={true} />
        <Tag text="type script" />
        <Tag text="블로그" />
        <Tag text="sample" />
        <Tag text="type script" />
      </div>

      <ContentContainer>
        <ul className={styles.postsWrapper}>
          {posts.map((post, index) => (
            <li>
              <PostPreivew post={post.frontmatter} key={index} />
            </li>
          ))}
        </ul>
      </ContentContainer>
    </main>
  )
}

export default PostLists

export const getStaticProps = async () => {
  const files = getFiles('blog')

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'contents', 'blog', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return { slug, frontmatter }
  })

  return {
    props: { posts },
  }
}
