import styles from './base_layout.module.css'
import Header from '@components/header'

interface BaseLayoutProps {
  children: any
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.section}>{children}</main>
    </>
  )
}

export default BaseLayout
