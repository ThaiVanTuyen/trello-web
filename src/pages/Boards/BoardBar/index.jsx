import { AddToDrive, Bolt, Dashboard, FilterList, VpnLock } from '@mui/icons-material'
import { Box, Chip } from '@mui/material'

function BoardBar() {
  const menu_Style = {
    color: 'primary.main',
    bgcolor: 'white',
    border: 'none',
    paddingX: '5px',
    borderRadius: '4px',
    '& .MuiSvgIcon-root': {
      color: 'primary.main'
    },
    '&hover': {
      bgcolor: 'primary.50'
    }
  }
  return (
    <Box px={2} sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'auto',
      borderTop: '1px solid #00bfa5' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={menu_Style}
          clickable
          icon={<Dashboard/>}
          label="PhamNinh704"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<VpnLock/>}
          label="Public/Private Workspace"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<AddToDrive/>}
          label="Add To Google Drive"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<Bolt/>}
          label="Automations"
        />
        <Chip
          sx={menu_Style}
          clickable
          icon={<FilterList/>}
          label="Filters"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      </Box>
    </Box>
  )
}

export default BoardBar