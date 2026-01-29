import Link from 'next/link'
import { MdArrowBackIos } from 'react-icons/md'

import classes from './BackButton.module.css'
import { Wrapper } from '@/app/components/Wrapper'

export const BackButton = () => {
  return (
    <Wrapper>
      <Link href="/" className={classes.btn}>
        <MdArrowBackIos />
        Back to the main page
      </Link>
    </Wrapper>
  )
}
