'use client'

import { motion } from 'framer-motion'

import { Header } from '../Header'
import { Divider } from '../Divider'
import { Wrapper } from '../Wrapper'
import { Assessment } from '../Assessment'

import { heroAnimation } from '../../constants'

import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <motion.section className={styles.container}>
      <Header />

      <Wrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={heroAnimation}
          viewport={{ once: true }}
        >
          <div className={styles.title_container}>
            <p className={styles.title}>PAHLAVAN</p>

            <p className={styles.title}>General Contracting Inc</p>
          </div>

          <Divider />

          <h2 className={styles.description}>Drywall Specialists</h2>
        </motion.div>
      </Wrapper>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={heroAnimation}
        viewport={{ once: true }}
        className={styles.assessment_container}
      >
        <Assessment text="Book a free assessment" />
      </motion.div>
    </motion.section>
  )
}
