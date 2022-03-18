import styles from '../styles/tag.module.css'

interface TagProps {
  text: string
}
const Tag = ({ text }: TagProps) => {
  return <div className={styles.tag}>{text}</div>
}

export default Tag
