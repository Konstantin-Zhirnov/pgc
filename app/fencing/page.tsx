'use client'

import { motion } from 'framer-motion'

import { Assessment } from '../components/Assessment'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { GetInTouch } from '../components/GetInTouch'
import { WorkShowcase } from '../components/WorkShowcase'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation, fencesImagesSrcArray } from '../constants'

import styles from './Fencing.module.css'

export default function Fencing() {
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
            <h1 className={styles.title}>Fencing</h1>

            <Divider />

            <h2 className={styles.description}>
              Welcome to Pahlavan General Contracting Inc (PGC) – Your Reliable Fence Installation
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
              At PGC, we help define, protect, and enhance your property with high-quality fence
              installation services. From residential yards to commercial and industrial sites, we
              design and install durable, visually appealing fences that combine functionality,
              security, and curb appeal.
            </p>

            <p className={styles.text}>
              We specialize in professional fence installation for new properties, renovations,
              replacements, and upgrades. Whether you need a privacy fence for your backyard, a
              decorative fence to complement your landscape, or a strong perimeter solution for a
              commercial project, our team delivers precise workmanship and long-lasting results.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <WorkShowcase images={fencesImagesSrcArray} />

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              A well-built fence is more than just a boundary — it’s a critical element of safety,
              privacy, and property value. Our process includes accurate layout and measurements,
              proper post setting, solid foundations, and careful alignment to ensure straight
              lines, consistent spacing, and exceptional durability. Every detail matters, from
              ground preparation to the final finish.
            </p>

            <p className={styles.text}>
              We understand that fence installation requires both technical skill and attention to
              aesthetics. Homeowners trust us to create clean, attractive outdoor spaces, while
              builders and property managers rely on our efficiency, dependable timelines, and
              consistent quality. At PGC, we take pride in delivering fencing solutions that look
              great, perform reliably, and stand up to the elements for years to come.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <GetInTouch />
    </>
  )
}
