import { Box, Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
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
const COLUMN_HEADER_HEIGHT = '58px'
const COLUMN_FOOTER_HEIGHT = '60px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      width: '100%',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1976d2'),
      height: (theme) => theme.trello.boardContentHeight,
      display: 'flex'
    }}
    >
      <Box
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px'
        }}
      >
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: 2
        }}>
          <Typography >Column Title</Typography>
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
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{}}>
          List Card
        </Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          borderTop: '1px solid #ccc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pl: 2
        }}>
          Footer
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent