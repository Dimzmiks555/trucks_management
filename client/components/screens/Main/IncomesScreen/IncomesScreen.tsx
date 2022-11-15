import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import List from './components/List/List'

const IncomesScreen = () => {

    const data = [1,2,3,4,5]

  return (
    <div>
        <PageHeader>
            <h1>Доходы</h1>
            <Link href='/main/incomes/create'><Button sx={{color: 'white'}} variant="contained">Добавить</Button></Link>
        </PageHeader>
        <List data={data}/>
    </div>
  )
}

export default IncomesScreen