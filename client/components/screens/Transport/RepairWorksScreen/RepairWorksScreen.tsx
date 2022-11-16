import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'

const RepairWorksScreen = () => {
  return (
    <div>
        <PageHeader>
            <h1>Ремонтные работы</h1>
            <Link href='/transport/all/create'><Button sx={{color: 'white'}} variant="contained">Добавить</Button></Link>
        </PageHeader>
    </div>
  )
}

export default RepairWorksScreen