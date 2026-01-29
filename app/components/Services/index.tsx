import { motion } from 'framer-motion'
import Link from 'next/link'

import { animation } from '../../constants'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import styles from './Services.module.css'

export const Services = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper classes={styles.wrapper}>
        <Title text="Other Services" />

        <Divider />

        <div className={styles.cards}>
          <div className={styles.card}>
            <p>Fencing</p>

            <img className={styles.image} src="/assets/fencing.webp" alt="Fencing" />

            <Link href="/fencing">Check out our services</Link>
          </div>

          <div className={styles.card}>
            <p>Siding</p>

            <img className={styles.image} src="/assets/siding.webp" alt="Siding" />

            <Link href="/siding">Check out our services</Link>
          </div>

          <div className={styles.card}>
            <p>Window Trim</p>

            <img className={styles.image} src="/assets/window_trim.webp" alt="Window trim" />

            <Link href="/window-trim">Check out our services</Link>
          </div>

          <div className={styles.card}>
            <p>Swimming Pool</p>

            <img className={styles.image} src="/assets/pool.webp" alt="Swimming pool" />

            <Link href="/pool">Check out our services</Link>
          </div>
        </div>
      </Wrapper>
    </motion.section>
  )
}
