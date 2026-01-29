import { motion } from 'framer-motion'

import { animation } from '../../constants'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import styles from './Offer.module.css'

export const Offer = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper classes={styles.wrapper}>
        <Title text="Why Choose Us" />

        <Divider />

        <p className={styles.text}>With years of hands-on experience, we handle every detail:</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src="/assets/drywall_installation.webp"
              alt="Drywall Installation"
            />

            <div className={styles.text_container}>
              <p>Precise drywall installation and hanging</p>
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.image} src="/assets/taping.webp" alt="Taping" />

            <div className={styles.text_container}>
              <p>Expert taping and multi-coat mudding</p>
            </div>
          </div>

          <div className={styles.card}>
            <img className={styles.image} src="/assets/smooth_finish.webp" alt="Smooth Finish" />

            <div className={styles.text_container}>
              <p>Smooth Level 4 & Level 5 finishes for high-end paint or texture</p>
            </div>
          </div>

          <div className={styles.card}>
            <img
              className={styles.image}
              src="/assets/corner_bead_installation.webp"
              alt="Corner bead installation"
            />

            <div className={styles.text_container}>
              <p>Corner bead installation, repairs, and specialty work</p>
            </div>
          </div>
        </div>

        <p className={styles.text}>
          We know that great drywall work isn`t just about covering walls — it`s about creating
          clean, durable surfaces that make painting easier, rooms brighter, and your entire project
          look polished. Homeowners appreciate the flawless look; builders and general contractors
          value our reliability, tight schedules, and consistent quality.
        </p>

        <p className={styles.text}>Ready for walls that look as good as new construction should?</p>
      </Wrapper>
    </motion.section>
  )
}
