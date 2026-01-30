import Image from 'next/image'
import Link from 'next/link'

import { Wrapper } from '../Wrapper'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <Wrapper classes={styles.container}>
      <Link href="/">
        <Image alt="Aarsen gutters" height={100} src="/assets/logo.png" width={100} priority />
      </Link>

      <div className={styles.link_container}>
        <a className={styles.phone} href="tel:7785314141">
          778.531.4141
        </a>

        <a href="mailto:info@pgcdrywall.com" className={styles.email}>
          Send Email
        </a>
      </div>
    </Wrapper>
  )
}
