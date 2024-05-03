import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '../../../utils/sorts'

function BoardContent({ board }) {
  return (
    <Box sx={{
      width: '100%',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1976d2'),
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}
    >
      <ListColumns columns={ mapOrder(board?.columns, board?.columnOrderIds, '_id') } />
    </Box>
  )
}

export default BoardContent