import { Box, Button, FormControl, TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import React from 'react'
import PageHeader from '../../../shared/PageHeader/PageHeader'

const CreateIncomesScreen = () => {

  const [value, setValue] = React.useState<any>(new Date());


  return (
    <div>
      <PageHeader>
            <h1>Новый доход</h1>
            <Button sx={{color: 'white'}} variant="contained">Создать</Button>
      </PageHeader>
      <Box display="flex" flexDirection="column" sx={{background: 'white', p: 4}}>
        <FormControl sx={{mb: 3}}>
          <TextField label="Сумма" type="number"  sx={{width: 280}}></TextField>
        </FormControl>
        <FormControl>
          <DatePicker
            label="Дата"
            mask='__/__/____'
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField sx={{width: 280}} {...params} />}
          />
        </FormControl>
      </Box>
    </div>
  )
}

export default CreateIncomesScreen