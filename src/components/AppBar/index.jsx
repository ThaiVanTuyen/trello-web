import ModelSelect from '../../components/ModelSelect'
import { Box, Button, SvgIcon, Typography, TextField, Tooltip, Badge } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../../assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import { HelpOutline, NotificationsNone } from '@mui/icons-material'
import Profiles from './Menus/Profiles'
function AppBar () {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarheight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'auto'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color:'primary.main' }}>
          <SvgIcon fontSize='small' component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs: 'none', md: 'flex' } }}>
          <Workspaces/>
          <Recent/>
          <Templates/>
          <Starred/>
          <Button variant='outlined'>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField sx={{ minWidth: '120px' }} id="outlined-search" label="Search" variant="outlined" size='small'/>
        <ModelSelect />
        <Tooltip title="Notification">
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone sx={{ color: 'primary.main' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color: 'primary.main' }}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar