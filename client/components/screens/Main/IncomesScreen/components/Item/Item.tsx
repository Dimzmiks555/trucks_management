import React from 'react'
import s from './Item.module.scss'

const Item = ({item}: {item: any}) => {
  return (
    <div className={s.item}>
        <p>3000 ₽</p>
        <p>15.11.2022 14:53</p>
    </div>
  )
}

export default Item