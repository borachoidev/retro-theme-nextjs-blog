import styles from './content_container.module.css'

interface ContentContainerProps {
  children: React.ReactNode
}
const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className={styles.container}>{children}</div>
}
export default ContentContainer
