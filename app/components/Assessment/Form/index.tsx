'use client'

import { FC, useState } from 'react'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'

import { Divider } from '../../Divider'

import { FormItem } from './FormItem'

import styles from './Form.module.css'

interface IProps {
  onClose: () => void
}

export const Form: FC<IProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(false)

  const schema = yup.object({
    Name: yup.string().required('Enter your name'),
    Phone: yup.string().required('Enter your phone'),
    Message: yup.string(),
  })

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<any>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    setLoading(true)

    const body = {
      name: data.Name,
      phone: data.Phone,
      message: data.Message,
    }

    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      if (res.status === 200) {
        reset()

        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          theme: 'dark',
        })

        onClose()
      } else {
        toast.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      toast.error('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <p className={styles.text}>Fill out the form below and we’ll get back to you ASAP</p>

      <Divider />

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem register={register} errors={errors} name="Name" label="Name:" />

        <FormItem register={register} errors={errors} name="Phone" label="Phone:" />

        <FormItem register={register} errors={errors} name="Message" label="Message:" />

        <div className={styles.btn_container}>
          <button type="submit" className={styles.btn} disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>
    </>
  )
}
