import { Box, Button, TextField } from '@mui/material'
import Column from './Column/Column'
import { Close, NoteAdd } from '@mui/icons-material'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'
import { toast } from 'react-toastify'
function ListColumns({ columns, createNewColumn, createNewCard }) {
  const [titleColumn, setTitleColumn] = useState('')
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => {
    setOpenNewColumnForm(!openNewColumnForm)
    setTitleColumn('')
  }
  const addNewColumn = async () => {
    if (titleColumn) {
      await createNewColumn({ title: titleColumn })
      setTitleColumn('')
      setOpenNewColumnForm(false)
      // toast.success('Create new column successfully!')
    }
    else {
      toast.error('Please enter column title!')
    }
  }

  return (
    <SortableContext
      items={ columns ? columns?.map( c => c._id) : []}
      strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden'
        }}
      >
        {columns?.map(column => <Column key={column._id} column={column} createNewColumn={createNewColumn} createNewCard={createNewCard}/>)}
        {!openNewColumnForm
          ?
          <Box
            sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d'
            }}
          >
            <Button
              startIcon={<NoteAdd/>}
              sx={{
                color: 'white',
                width: '100%',
                justifyContent: 'flex-start',
                pl: 2.5,
                py: 1
              }}
              onClick={toggleOpenNewColumnForm}
            >
            Add new column
            </Button>
          </Box>
          :
          <Box sx={{
            minWidth: '250px',
            maxWidth: '250px',
            mx: 2,
            p: 1,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d',
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}>
            <TextField
              sx={{
                '& label': { color: 'white' },
                '& input': { color: 'white' },
                '& label.Mui-focused': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&:hover fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' }
                }
              }}
              value={titleColumn}
              onChange={(e) => setTitleColumn(e.target.value)}
              label="Enter column title"
              variant="outlined"
              size='small'
              type='text'
              autoFocus
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Button variant='contained'
                color='success'
                size='small'
                sx={{
                  alignContent: 'center',
                  boxShadow: 'none',
                  border: '0.5px solid',
                  borderColor: (theme) => theme.palette.success.main,
                  '&:hover': { backgroundColor: (theme) => theme.palette.success.main }
                }}
                onClick={addNewColumn}
              >Add Column</Button>
              <Close onClick={toggleOpenNewColumnForm}
                fontSize='small'
                sx={{ color: 'white', cursor: 'pointer' }}
              />
            </Box>
          </Box>
        }
      </Box>
    </SortableContext>
  )
}
export default ListColumns