import { Wrapper } from '../Wrapper'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Wrapper classes={styles.wrapper}>
        <a href="mailto:info@pahlavancontracting.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#c5c8dc"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
          </svg>
          info@pahlavancontracting.com
        </a>

        <a href="tel:7785314141">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#c5c8dc"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
          </svg>
          778.531.4141
        </a>
      </Wrapper>

      <div className={styles.divider} />

      <p className={styles.rights}>© 2026 All Rights Reserved</p>
    </footer>
  )
}
