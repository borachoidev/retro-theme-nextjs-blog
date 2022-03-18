import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import styles from '@styles/components/navLink.module.css'

interface NavLinkProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> {
  href: string
  exact: boolean
}
const NavLink = ({ href, exact, children, ...props }: NavLinkProps) => {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href}>
      <a
        {...props}
        className={[styles.link, isActive ? styles.active : ''].join(' ')}
      >
        {children}
      </a>
    </Link>
  )
}

export { NavLink }
