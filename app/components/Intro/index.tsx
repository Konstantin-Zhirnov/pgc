import { motion } from 'framer-motion'

import { animation } from '../../constants'

import { Divider } from '../Divider'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import styles from './Intro.module.css'

export const Intro = () => {
  return (
    <motion.section
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper classes={styles.wrapper}>
        <Title text="Professional Drywall Work" />

        <Divider />

        <p className={styles.text}>
          Welcome to Pahlavan General Contracting Inc (PGC Drywall Specialists) – Your Trusted
          Experts in Drywall Installation, Taping & Finishing
        </p>

        <p className={styles.text}>
          At PGC, we transform rough framing into the flawless, paint-ready walls and ceilings that
          make every space feel complete. Specializing in professional drywall hanging, taping,
          mudding, and finishing, we deliver smooth, seamless results that stand the test of
          time—whether it`s a new custom home, a commercial build-out, a basement renovation, or a
          quick repair.
        </p>

        <p className={styles.text}>
          Drywall forms the foundation of your interior surfaces. But the real magic happens during
          the taping and mudding (also known as finishing) process: carefully embedding tape over
          every seam, filling screw holes, and building up multiple layers of joint compound to
          create invisible joints and perfectly flat surfaces. It`s a skill that separates amateur
          work from truly professional results—no waves, no visible seams, no shadows under critical
          lighting.
        </p>
      </Wrapper>
    </motion.section>
  )
}
