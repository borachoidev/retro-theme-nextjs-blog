import styles from './tag.module.css'
import { CSSProperties, RefObject, useCallback, useRef } from 'react'
import { kebabCase } from '@utils/commons'
import Router from 'next/router'

interface TagProps {
  text: string
  active?: boolean
  small?: boolean
  style?: CSSProperties
  scrollToCenter?: (tagRef: RefObject<HTMLLIElement>) => void
}
const Tag = ({
  text,
  active = false,
  small = false,
  style,
  scrollToCenter,
}: TagProps) => {
  const tagRef = useRef<HTMLLIElement>(null)

  const onClick = useCallback(() => {
    if (!scrollToCenter) return
    scrollToCenter(tagRef)
    const pathname = text === 'ALL' ? '/blog' : `/tag/${text}`
    Router.push(pathname)
    console.log(tagRef.current)
  }, [tagRef])

  const tag = kebabCase(text, true)
  const defaultStyle = [
    styles.tag,
    active ? styles.active : '',
    small ? styles.small : '',
  ].join(' ')

  return (
    <li className={styles.item} ref={tagRef} onClick={onClick}>
      <div className={defaultStyle} style={style}>
        <span className={styles.text}>{tag}</span>
      </div>
    </li>
  )
}

export default Tag
