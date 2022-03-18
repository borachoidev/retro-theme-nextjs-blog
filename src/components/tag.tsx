import styles from '../styles/tag.module.css'

interface TagProps {
  text: string
  active?: boolean
}
const Tag = ({ text, active = false }: TagProps) => {
  const tag = text.replace(/\s+/g, '-').toUpperCase()

  return (
    <div className={[styles.tag, active ? styles.active : ''].join(' ')}>
      {tag}
    </div>
  )
}

export default Tag
