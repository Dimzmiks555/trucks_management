import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'
import List from './components/List/List'

const AllScreen = () => {



  const data = [1,2,3,4,5,1,2,3,4,5]

  return (
    <div>
        <PageHeader>
            <h1>Работники</h1>
            <Link href='/transport/all/create'><Button sx={{color: 'white'}} variant="contained">Добавить</Button></Link>
        </PageHeader>
        <List data={data}/>
    </div>
  )
}

export default AllScreen