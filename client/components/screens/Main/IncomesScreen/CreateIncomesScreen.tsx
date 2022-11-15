import { Box, Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'

const CreateIncomesScreen = () => {
  return (
    <div>
      <PageHeader>
            <h1>Новый доход</h1>
            <Button sx={{color: 'white'}} variant="contained">Создать</Button>
      </PageHeader>
      <Box display="flex" flexDirection="column" sx={{background: 'white', p: 4}}>
        <FormControl sx={{mb: 3}}>
          <TextField label="Сумма"  sx={{width: 280}}></TextField>
        </FormControl>
        <FormControl>
          <TextField sx={{width: 280}}></TextField>
        </FormControl>
      </Box>
    </div>
  )
}

export default CreateIncomesScreen