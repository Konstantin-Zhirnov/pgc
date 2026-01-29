import { FC } from 'react'
import { motion } from 'framer-motion'

import { animation } from '../../constants'

import { Divider } from '../Divider'
import { Images } from '../Images'
import { Gallery } from '../Gallery'
import { Title } from '../Title'
import { Wrapper } from '../Wrapper'

import styles from './WorkShowcase.module.css'

interface IProps {
  images: { full: string; min: string }[]
  main?: boolean
}

export const WorkShowcase: FC<IProps> = ({ images, main }) => {
  return (
    <motion.section
      className={main ? styles.main_container : styles.container}
      initial="hidden"
      whileInView="visible"
      variants={animation}
      viewport={{ once: true }}
    >
      <Wrapper>
        <Title text="Work Showcase" />

        <Divider />

        {main ? <Images images={images} /> : <Gallery images={images} />}
      </Wrapper>
    </motion.section>
  )
}
