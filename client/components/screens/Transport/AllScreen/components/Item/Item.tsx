import React from 'react'
import s from './Item.module.scss'

const Item = ({item}: {item: any}) => {
  return (
    <div className={s.item}>
        <div><a href='#'>Х154НА 136</a></div>
        <div>КАМаЗ</div>
        <div>Добавлен 16.11.2022</div>
    </div>
  )
}

export default Item