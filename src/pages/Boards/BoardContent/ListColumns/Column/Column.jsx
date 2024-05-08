import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { AddCard, Close, DeleteForever, DragHandle } from '@mui/icons-material'
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import ListCards from './ListCards/ListCards'
import { mapOrder } from '../../../../../utils/sorts'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { toast } from 'react-toastify'

function Column({ column, createNewCard }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: column._id, data: { column } })

  const [openNewCardForm, setOpenNewCardForm] = useState(false)
  const [titleCard, setTitleCard] = useState('')
  const toggleOpenNewCardForm = () => {
    setOpenNewCardForm(!openNewCardForm)
    setTitleCard('')
  }
  const addNewCard = async () => {
    if (titleCard) {
      await createNewCard({ title: titleCard, columnId: column._id })
      setTitleCard('')
      setOpenNewCardForm(false)
      toast.success('Create new card successfully!')
    }
    else {
      toast.error('Please enter card title!')
    }
  }

  const dndKitColumn = {
    transform: CSS.Translate.toString(transform),
    transition
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumn}
      {...attributes}
      {...listeners}
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}-${theme.spacing(5)})`
      }}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2
        }}>
        <Typography
          variant='h6'
          sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {column.title}
        </Typography>
        <Tooltip title="More Options">
          <ExpandMore
            sx={{ cursor: 'pointer', color: 'primary.main' }}
            id="basic-column-dropdown"
            aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          />
        </Tooltip>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-column-dropdown'
          }}
        >
          <MenuItem>
            <ListItemIcon><AddCard fontSize="small" /></ListItemIcon>
            <ListItemText>Add new card</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
            <ListItemText>Cut</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
            <ListItemText>Copy</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
            <ListItemText>Paste</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon><DeleteForever fontSize="small" /></ListItemIcon>
            <ListItemText>Remove this column</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
            <ListItemText>Archive this column</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <ListCards listCards={ mapOrder( column.cards, column.cardOrderIds, '_id') } />
      <Box sx={{
        height: (theme ) => theme.trello.columnFooterHeight,
        borderTop: '1px solid #ccc',
        p: 2
      }}>
        {!openNewCardForm ?
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%'
            }}
          >
            <Button startIcon={<AddCard/>} onClick={toggleOpenNewCardForm}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandle sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
          :
          <Box sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}>
            <TextField
              sx={{
                '& label': { color: 'text.primary' },
                '& input': {
                  color: (theme) => theme.palette.primary.main,
                  bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : 'white')
                },
                '& label.Mui-focused': { color: (theme) => theme.palette.primary.main },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: (theme) => theme.palette.primary.main },
                  '&:hover fieldset': { borderColor: (theme) => theme.palette.primary.main },
                  '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.primary.main }
                },
                '& .MuiOutlinedInput-input': {
                  borderRadius: 1
                }
              }}
              value={titleCard}
              onChange={(e) => setTitleCard(e.target.value)}
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
                onClick={addNewCard}
              >Add</Button>
              <Close
                fontSize='small'
                sx={{
                  color: (theme) => theme.palette.warning.light,
                  cursor: 'pointer'
                }}
                onClick={toggleOpenNewCardForm}
              />
            </Box>
          </Box>
        }
      </Box>
    </Box>
  )
}
export default Column