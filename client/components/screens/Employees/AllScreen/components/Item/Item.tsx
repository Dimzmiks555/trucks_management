import React from 'react'
import s from './Item.module.scss'

const Item = ({item}: {item: any}) => {
  return (
    <div className={s.item}>
        <div><a href='#'>Афанасьев Николай Дмитриевич</a></div>
    </div>
  )
}

export default Item