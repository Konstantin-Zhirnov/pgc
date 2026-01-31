'use client'

import { motion } from 'framer-motion'

import { Assessment } from '../components/Assessment'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { GetInTouch } from '../components/GetInTouch'
import { WorkShowcase } from '../components/WorkShowcase'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation, carpentryImagesSrcArray } from '../constants'

import styles from './RoughAndFinishingCarpentry.module.css'

export default function RoughAndFinishingCarpentry() {
  return (
    <>
      <motion.section className={styles.container}>
        <Header />

        <BackButton />

        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={heroAnimation}
            viewport={{ once: true }}
          >
            <h1 className={styles.title}>Rough And Finishing Carpentry</h1>

            <Divider />

            <h2 className={styles.description}>
              Welcome to Pahlavan General Contracting Inc (PGC) – Professional Rough and Finishing
              Carpentry
            </h2>
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

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              At PGC, quality carpentry is the foundation of every well-built space. Our rough and
              finishing carpentry services combine structural precision with refined craftsmanship,
              ensuring your project is solid, functional, and visually polished from the inside out.
              From framing to final details, we deliver work that supports the integrity and
              character of your home or building.
            </p>

            <p className={styles.text}>
              Rough carpentry forms the backbone of construction. We handle framing, partitions,
              floors, ceilings, and structural components with accuracy and attention to building
              codes. Proper measurements, strong connections, and clean layouts ensure stability,
              longevity, and a smooth workflow for all following trades.
            </p>

            <p className={styles.text}>
              Finishing carpentry brings the space to life. We install doors, baseboards, casings,
              crown molding, built-ins, stair components, and custom details that define the final
              look of an interior. Clean lines, tight joints, and flawless alignment create a
              cohesive, high-end appearance that enhances both comfort and value.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <WorkShowcase images={carpentryImagesSrcArray} main />

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              We work on new construction, renovations, and remodeling projects, adapting our
              approach to modern, traditional, and custom designs. Homeowners value our attention to
              detail and craftsmanship, while builders and contractors trust PGC for efficiency,
              reliability, and consistent results.
            </p>

            <p className={styles.text}>
              At PGC, we believe great carpentry is about more than wood and tools — it’s about
              precision, durability, and the finishing touches that transform a structure into a
              complete, well-crafted space.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <GetInTouch />
    </>
  )
}
