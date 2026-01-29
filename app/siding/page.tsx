'use client'

import { motion } from 'framer-motion'

import { Assessment } from '../components/Assessment'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { GetInTouch } from '../components/GetInTouch'
import { WorkShowcase } from '../components/WorkShowcase'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation, sidingImagesSrcArray } from '../constants'

import styles from './Siding.module.css'

export default function Siding() {
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
            <h1 className={styles.title}>Siding</h1>

            <Divider />

            <h2 className={styles.description}>
              Welcome to Pahlavan General Contracting Inc (PGC) – Your Trusted Siding Installation
              Experts
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
              At PGC, we transform the exterior of your home or building with high-quality siding
              installation and replacement services. Our team specializes in professional siding
              solutions that protect your property, enhance its curb appeal, and increase its
              value—whether it’s a new construction, a renovation, or a repair project.
            </p>

            <p className={styles.text}>
              We work with a variety of siding materials, including vinyl, wood, fiber cement, and
              aluminum, ensuring the perfect combination of durability, style, and low maintenance
              for your property. From precise measurements and expert cutting to seamless
              installation, every step of our process is designed to deliver a flawless exterior
              that stands the test of time.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <WorkShowcase images={sidingImagesSrcArray} />

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              Siding does more than define the look of your building — it acts as a protective
              barrier against weather, moisture, and pests, while improving energy efficiency and
              reducing maintenance needs. Our skilled installers pay attention to every detail, from
              tight seams and proper alignment to finishing touches that ensure a clean, polished
              appearance.
            </p>

            <p className={styles.text}>
              Homeowners value the beauty, protection, and longevity our siding provides, while
              builders and contractors trust PGC for dependable service, on-time completion, and
              consistently high-quality results. With PGC, your property’s exterior will not only
              look great but also be built to last for years to come.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <GetInTouch />
    </>
  )
}
