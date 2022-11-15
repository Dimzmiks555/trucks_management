import React from 'react'
import Item from '../Item/Item'
import s from './List.module.scss'

const List = ({data}: {data: any[]}) => {
  return (
    <div className={s.list}>
      {data?.map(item => (
        <Item item={item}/>
      ))}
    </div>
  )
}

export default List