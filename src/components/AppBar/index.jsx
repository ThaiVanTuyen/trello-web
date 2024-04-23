import ModelSelect from '../../components/ModelSelect'
import { Box } from '@mui/material'

function AppBar () {
  return (
    <Box sx={{
      backgroundColor: 'primary.light',
      width: '100%',
      height: (theme) => theme.trello.appBarheight,
      display: 'flex',
      alignItems: 'center'
    }}>
      <ModelSelect />
    </Box>
  )
}

export default AppBar