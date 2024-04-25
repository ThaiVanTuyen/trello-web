import ModelSelect from '../../components/ModelSelect'
import { Box, Button, SvgIcon, Typography, TextField, Tooltip, Badge } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../../assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import { HelpOutline, NotificationsNone } from '@mui/icons-material'
function AppBar () {
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarheight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color:'primary.main' }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Workspaces/>
        <Recent/>
        <Templates/>
        <Starred/>
        <Button variant='outlined'>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id="outlined-search" label="Search" variant="outlined" size='small'/>
        <ModelSelect />
        <Tooltip title="Notification">
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <Badge color='secondary' sx={{ cursor: 'pointer' }}>
            <HelpOutline />
          </Badge>
        </Tooltip>
      </Box>
    </Box>
  )
}

export default AppBar