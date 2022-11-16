import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'

const LeasingScreen = () => {
  return (
    <div>
        <PageHeader>
            <h1>Лизинговые платежи</h1>
            <Link href='/transport/leasing/create'><Button sx={{color: 'white'}} variant="contained">Добавить</Button></Link>
        </PageHeader>
    </div>
  )
}

export default LeasingScreen