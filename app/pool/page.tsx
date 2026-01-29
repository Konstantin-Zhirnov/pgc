'use client'

import { motion } from 'framer-motion'

import { Assessment } from '../components/Assessment'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { GetInTouch } from '../components/GetInTouch'
import { WorkShowcase } from '../components/WorkShowcase'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation, poolImagesSrcArray } from '../constants'

import styles from './Pool.module.css'

export default function Pool() {
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
            <h1 className={styles.title}>Swimming Pool</h1>

            <Divider />

            <h2 className={styles.description}>
              Welcome to Pahlavan General Contracting Inc (PGC) – Custom Pool Construction Experts
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
              At PGC, we bring outdoor spaces to life with professionally designed and expertly
              built swimming pools. From concept to completion, we create pools that combine
              functionality, durability, and visual appeal—turning your backyard into a place for
              relaxation, entertainment, and lasting memories.
            </p>

            <p className={styles.text}>
              We specialize in custom pool construction for residential properties, carefully
              tailored to your space, lifestyle, and design preferences. Whether you’re planning a
              brand-new pool, upgrading an existing one, or integrating it into a larger outdoor
              project, our team delivers precise execution and high-quality results at every stage.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <WorkShowcase images={poolImagesSrcArray} />

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              Building a pool requires more than great design—it demands technical expertise,
              careful planning, and attention to detail. Our process includes site preparation,
              structural work, proper drainage, waterproofing, and flawless finishing to ensure
              safety, longevity, and comfort. Every element is coordinated to meet high standards of
              performance and aesthetics.
            </p>

            <p className={styles.text}>
              A well-built pool adds value to your property and transforms how you use your outdoor
              space. Homeowners trust PGC for reliable timelines, clear communication, and
              craftsmanship that stands up to years of use and changing weather conditions. With
              PGC, your pool isn’t just built — it’s built right.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <GetInTouch />
    </>
  )
}
