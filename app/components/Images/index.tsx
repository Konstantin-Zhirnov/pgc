'use client'

import { FC, useState } from 'react'
import cn from 'classnames'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { MdRotate90DegreesCw, MdZoomIn, MdZoomOut } from 'react-icons/md'

import 'react-photo-view/dist/react-photo-view.css'
import styles from './Images.module.css'

interface IProps {
  images: { full: string; min: string }[]
}

export const Images: FC<IProps> = ({ images }) => {
  const [isShowAll, setIsShowAll] = useState(false)

  const handleClick = () => {
    setIsShowAll((prev) => !prev)
  }

  return (
    <div className={styles.wrapper}>
      <PhotoProvider
        speed={() => 800}
        easing={(type) =>
          type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        }
        toolbarRender={({ onScale, scale, rotate, onRotate }) => {
          return (
            <>
              <MdZoomIn
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onScale(scale + 1)}
              />
              <MdZoomOut
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onScale(scale - 1)}
              />
              <MdRotate90DegreesCw
                className={cn('PhotoView-Slider__toolbarIcon', styles.icon)}
                onClick={() => onRotate(rotate + 90)}
              />
            </>
          )
        }}
      >
        <>
          {(isShowAll ? images : images.slice(0, 4)).map((item, index) => (
            <PhotoView src={item.full} key={index}>
              <div className={styles.image_container}>
                <img src={item.min} className={styles.image} alt="Gutter cleaning and repair" />
              </div>
            </PhotoView>
          ))}

          <button className={styles.btn} onClick={handleClick}>
            {isShowAll ? 'Show less ▲' : 'Show more ▼'}
          </button>
        </>
      </PhotoProvider>
    </div>
  )
}
