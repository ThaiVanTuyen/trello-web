import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '60px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = extendTheme({
  trello: {
    appBarheight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: {
  //         main: teal[300],
  //         secondary: deepOrange
  //       }
  //     },
  //     dark: {
  //       palette: {
  //         primary: {
  //           main: cyan,
  //           secondary: orange
  //         }
  //       }
  //     }
  //   } },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '0.5px' }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiInputLabel:{
      styleOverrides: {
        root: () => {
          return {
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: () => {
          return {
            fontSize: '0.875rem'
          }
        }
      }
    }
  }
})

export default theme