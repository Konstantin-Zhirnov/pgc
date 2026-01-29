'use client'

import { FC, useCallback, useState } from 'react'

import { Form } from './Form'

import styles from './Assessment.module.css'
import { Modal } from '@/app/components/Modal'

interface IProps {
  text: string
}

export const Assessment: FC<IProps> = ({ text }) => {
  const [isModal, setIsModal] = useState(false)

  const onOpen = useCallback(() => {
    setIsModal(true)

    document.body.style.overflow = 'hidden'
  }, [])

  const onClose = useCallback(() => {
    setIsModal(false)

    document.body.style.overflow = 'auto'
  }, [])

  return (
    <>
      <button className={styles.btn} onClick={onOpen}>
        {text}
      </button>

      {isModal && (
        <Modal onClose={onClose}>
          <Form />
        </Modal>
      )}
    </>
  )
}
