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
      <TagContainer categories={tags} selected={selected} />
      <ContentContainer>
        <ul className={styles.postsWrapper}>{children}</ul>
      </ContentContainer>
    </>
  )
}

export default ListLayout
