import styles from '@styles/components/contentContainer.module.css'

interface ContentContainerProps {
  children: React.ReactNode
}
const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className={styles.container}>{children}</div>
}
export default ContentContainer
