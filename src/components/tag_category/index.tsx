import Tag from '@components/tag'
import { RefObject, useCallback, useRef } from 'react'
import styles from './tag_category.module.css'

interface TagCategoryProps {
  categories: string[]
  selected: string
}

const TagCategory = ({ categories, selected }: TagCategoryProps) => {
  const containerRef = useRef<HTMLUListElement>(null)

  const scrollToCenter = useCallback(
    (tabRef: RefObject<HTMLLIElement>) => {
      if (!(containerRef.current && tabRef.current)) return

      const { offsetWidth: tabWidth } = tabRef.current
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current
      const tabLeft = tabRef.current.getBoundingClientRect().left
      const containerLeft = containerRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      containerRef.current.scroll({
        left: targetScollX,
        top: 0,
        behavior: 'smooth',
      })
    },
    [containerRef]
  )

  return (
    <ul className={styles.container} ref={containerRef}>
      <Tag
        text="ALL"
        active={selected === 'ALL'}
        scrollToCenter={scrollToCenter}
      />
      {categories.map((category, i) => (
        <Tag
          text={category}
          active={selected === category}
          key={i}
          scrollToCenter={scrollToCenter}
        />
      ))}
    </ul>
  )
}

export default TagCategory
