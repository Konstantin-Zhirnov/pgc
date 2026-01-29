'use client'

import { FC, JSX, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { MdOutlineClose } from 'react-icons/md'
import styles from './Modal.module.css'

interface IProps {
  children: JSX.Element
  onClose: () => void
}

export const Modal: FC<IProps> = ({ children, onClose }) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setModalRoot(document.getElementById('modal'))
  }, [])

  if (!modalRoot) return null

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={onClose} className={styles.btn}>
          <MdOutlineClose />
        </button>

        {children}
      </div>
    </div>,
    modalRoot,
  )
}
