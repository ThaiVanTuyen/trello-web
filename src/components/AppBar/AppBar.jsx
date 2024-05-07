import { useState } from 'react'
import ModelSelect from '../ModelSelect/ModelSelect'
import { Box, Button, SvgIcon, Typography, TextField, Tooltip, Badge, InputAdornment } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '../../assets/trello.svg?react'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Templates from './Menus/Templates'
import Starred from './Menus/Starred'
import { Close, HelpOutline, LibraryAdd, NotificationsNone, Search } from '@mui/icons-material'
import Profiles from './Menus/Profiles'

function AppBar () {
  const [search, setSearch] = useState('')
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.appBarheight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color:'white' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color:'white' }}>
          <SvgIcon fontSize='small' component={TrelloIcon} inheritViewBox />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Trello</Typography>
        </Box>
        <Box sx={{ display:{ xs: 'none', md: 'flex' } }}>
          <Workspaces/>
          <Recent/>
          <Templates/>
          <Starred/>
          <Button sx={{
            color: 'white',
            border: 'none',
            '&:hover': { border: 'none' }
          }}
          variant='outlined'
          startIcon={<LibraryAdd/>}>
              Create
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} >
        <TextField
          sx={{ minWidth: '120px',
            maxWidth: '170px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-search"
          label="Search"
          variant="outlined"
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: 'white' }}/>
              </InputAdornment>
            ),
            endAdornment:(
              <InputAdornment position="end">
                <Close
                  fontSize='small'
                  sx={{ color: search ? 'white' : 'transparent', cursor: 'pointer' }}
                  onClick={() => setSearch('')}
                />
              </InputAdornment>
            )
          }}
        />
        <ModelSelect />
        <Tooltip title="Notification">
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNone sx={{ color: 'white' }}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutline sx={{ cursor: 'pointer', color: 'white' }}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}

export default AppBar