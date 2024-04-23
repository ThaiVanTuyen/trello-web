import { Box } from '@mui/material'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center' }}>
        BoardBar
    </Box>
  )
}

export default BoardBar