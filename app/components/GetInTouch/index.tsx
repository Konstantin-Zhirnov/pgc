import { Assessment } from '../Assessment'
import { Wrapper } from '../Wrapper'

import styles from './GetInTouch.module.css'

export const GetInTouch = () => {
  return (
    <section>
      <Wrapper classes={styles.wrapper}>
        <div className={styles.card}>
          <img className={styles.image} src="/assets/logo.png" alt="PGC Drywall Specialists" />

          <div>
            <h3>Get in touch with us today</h3>

            <p>
              Contact us today for a free estimate—we`re here to make your next project smooth from
              start to finish.
            </p>
          </div>

          <Assessment text="Contact us today" />
        </div>
      </Wrapper>
    </section>
  )
}
