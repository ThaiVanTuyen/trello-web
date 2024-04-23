
import { deepOrange, orange, cyan } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme} from '@mui/material/styles';

const theme = extendTheme({
  trello: {
    appBarheight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ff5252',
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