
import { deepOrange, orange, cyan, teal } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  trello: {
    appBarheight: '58px',
    boardBarHeight: '60px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: teal[300],
          secondary: deepOrange
        }
      },
      dark: {
        palette: {
          primary: {
            main: cyan,
            secondary: orange
          }
        }
      }
    } }
})


export default theme