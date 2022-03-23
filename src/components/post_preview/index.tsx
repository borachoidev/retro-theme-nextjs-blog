import styles from './post_preview.module.css'
import { PostPreview } from 'src/type'
import Tag from '../tag'
import Link from 'next/link'
interface PostPreviewItemProps {
  post: PostPreview
}
const PostPreviewItem = ({
  post: { frontmatter, slug },
}: PostPreviewItemProps) => {
  const { tags, date, title, description } = frontmatter

  const tag = typeof tags === 'string' ? [tags] : tags
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <article className={styles.container}>
          <span className={styles.date}> {date}</span>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.tagContainer}>
            {tag.map(text => (
              <Tag text={text} key={text} small />
            ))}
          </div>
          <p className={styles.description}>{description}</p>
        </article>
      </a>
    </Link>
  )
}

export default PostPreviewItem
