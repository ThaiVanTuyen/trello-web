import { Box } from '@mui/material'

function BoardContent() {
  return (
    <Box sx={{ width: '100%',
      height: (theme) => `calc(100% - ${theme.trello.appBarheight} - ${theme.trello.boardBarHeight})`,
      display: 'flex',
      alignItems: 'center' }}
    >
        BoardContent
    </Box>
  )
}

export default BoardContent