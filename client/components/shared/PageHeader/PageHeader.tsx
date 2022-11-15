import React, { FC, ReactNode } from 'react'
import s from './PageHeader.module.scss'

type Props = {
    children: ReactNode
}

const PageHeader: FC<Props> = ({children}) => {
  return (
    <div className={s.pageHeader}>
        {children}
    </div>
  )
}

export default PageHeader