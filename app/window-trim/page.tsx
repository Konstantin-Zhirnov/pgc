'use client'

import { motion } from 'framer-motion'

import { Assessment } from '../components/Assessment'
import { BackButton } from '../components/BackButton'
import { Divider } from '../components/Divider'
import { Header } from '../components/Header'
import { GetInTouch } from '../components/GetInTouch'
import { WorkShowcase } from '../components/WorkShowcase'
import { Wrapper } from '../components/Wrapper'

import { heroAnimation, animation, windowsImagesSrcArray } from '../constants'

import styles from './WindowTrim.module.css'

export default function WindowTrim() {
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
            <h1 className={styles.title}>Window Trims</h1>

            <Divider />

            <h2 className={styles.description}>
              Welcome to Pahlavan General Contracting Inc (PGC) – Professional Window Trim
              Installation
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
              At PGC, we add the finishing touches that bring character, depth, and refinement to
              your windows. Our window trim installation services enhance both the interior and
              exterior of your property, creating clean lines, balanced proportions, and a polished,
              high-end appearance.
            </p>

            <p className={styles.text}>
              Window trim is more than a decorative detail — it frames your windows, conceals gaps,
              improves insulation, and protects edges from wear and moisture. With precise
              measurements, clean cuts, and careful installation, we ensure every trim piece fits
              perfectly and complements the overall style of your home or building.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <WorkShowcase images={windowsImagesSrcArray} />

      <motion.section className={styles.text_container}>
        <Wrapper classes={styles.wrapper}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={animation}
            viewport={{ once: true }}
          >
            <p className={styles.text}>
              We work with a range of trim styles and materials to suit modern, traditional, and
              custom designs. Whether it’s a new construction project, a renovation, or an upgrade
              to refresh your space, our skilled craftsmanship delivers crisp corners, smooth
              joints, and seamless transitions that elevate the entire room or exterior façade.
            </p>

            <p className={styles.text}>
              Homeowners appreciate the refined look and attention to detail, while builders and
              contractors rely on PGC for consistent quality, efficiency, and reliable scheduling.
              At PGC, we believe that great trim work is what turns a finished window into a true
              architectural feature.
            </p>
          </motion.div>
        </Wrapper>
      </motion.section>

      <GetInTouch />
    </>
  )
}
