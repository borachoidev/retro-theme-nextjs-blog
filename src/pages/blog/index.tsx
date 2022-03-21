import fs, { readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getAllTags, getFiles } from '@utils/files'
import { PostPreview } from 'src/type'
import ContentContainer from '@components/content_container'
import Tag from '@components/tag'
import PostPreivew from '@components/post_preview'
import styles from './post_list.module.css'
import { dateFormat } from '@utils/date'
import { dateSortDesc } from '@utils/commons'

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
  const files = getFiles('blog')

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join(process.cwd(), 'contents', 'blog', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter: { ...frontmatter, date: dateFormat(frontmatter.date) },
    }
  })
  posts.sort((a, b) => dateSortDesc(a.frontmatter.date, b.frontmatter.date))
  const tags = await getAllTags('blog')
  console.log(tags)
  return {
    props: { posts },
  }
}
