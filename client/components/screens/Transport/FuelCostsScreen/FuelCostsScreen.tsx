import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'

const FuelCostsScreen = () => {
  return (
    <div>
        <PageHeader>
            <h1>Топливные расходы</h1>
            <Link href='/transport/fuel_costs/create'><Button sx={{color: 'white'}} variant="contained">Добавить</Button></Link>
        </PageHeader>
    </div>
  )
}

export default FuelCostsScreen