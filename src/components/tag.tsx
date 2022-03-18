import styles from '@styles/components/tag.module.css'
import { CSSProperties } from 'react'

interface TagProps {
  text: string
  active?: boolean
  small?: boolean
  style?: CSSProperties
}
const Tag = ({ text, active = false, small = false, style }: TagProps) => {
  const tag = text.replace(/\s+/g, '-').toUpperCase()
  if (small)
    return (
      <div
        className={[styles.tag, styles.small, active ? styles.active : ''].join(
          ' '
        )}
        style={style}
      >
        <span className={styles.text}> {tag}</span>
      </div>
    )

  return (
    <div className={[styles.tag, active ? styles.active : ''].join(' ')}>
      <span className={styles.text}> {tag}</span>
    </div>
  )
}

export default Tag
