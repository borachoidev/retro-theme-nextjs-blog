import styles from './post_preview.module.css'
import { dateFormat } from '@utils/date'
import { BlogFrontMatter } from 'src/type'
import Tag from '../tag'

const PostPreviewItem = ({ post }: { post: BlogFrontMatter }) => {
  const { tags, date, title, description } = post

  const tag = typeof tags === 'string' ? [tags] : tags
  return (
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
  )
}

export default PostPreviewItem
