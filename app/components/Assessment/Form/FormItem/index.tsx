import { FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'

import styles from './FormItem.module.css'

interface IProps {
  register: any
  errors: any
  name: string
  label: string
}

export const FormItem: FC<IProps> = ({ register, name, errors, label }) => {
  const getInput = () => {
    switch (name) {
      case 'Message':
        return (
          <textarea
            id={name}
            {...register(name)}
            autoComplete="off"
            className={`${styles.input} ${styles.description}`}
          />
        )
      default:
        return <input id={name} {...register(name)} autoComplete="off" className={styles.input} />
    }
  }

  return (
    <div className={styles.input_container}>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>

      {getInput()}

      <ErrorMessage
        errors={errors as any}
        name={name}
        render={({ message }) => <p className={styles.error}>{message}</p>}
      />
    </div>
  )
}
