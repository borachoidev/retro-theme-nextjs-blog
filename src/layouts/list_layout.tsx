import ContentContainer from '@components/content_container'
import styles from './list_layout.module.css'
import TagContainer from '@components/tag_category'
import Header from '@components/header'

interface ListLayoutProps {
  tags: string[]
  selected: string
  children: any
}
const ListLayout = ({ children, selected, tags }: ListLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.section}>
        <TagContainer categories={tags} selected={selected} />
        <ContentContainer>{children}</ContentContainer>
      </main>
    </>
  )
}

export default ListLayout
