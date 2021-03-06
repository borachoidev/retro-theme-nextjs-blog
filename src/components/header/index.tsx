import Link from 'next/link'
import React, { Fragment } from 'react'
import headerNavLinks from 'src/data/headerNavLinks'
import { siteMetadata } from 'src/data/siteMetadata'
import { NavLink } from '@components/nav_link'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link href="/">
          <h2 className={styles.title}>{siteMetadata.headerTitle}</h2>
        </Link>
        <nav>
          {headerNavLinks.map(nav => (
            <Fragment key={nav.href}>
              <NavLink href={nav.href} exact={nav.href === '/'}>
                {nav.title}
              </NavLink>
            </Fragment>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
