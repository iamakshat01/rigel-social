import { createMuiTheme } from '@material-ui/core/styles'
import { teal, purple } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#1f1f60',
      main: '#1f1f60',
      dark: '#1f1f60',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: purple['900'],
      protectedTitle: purple['700'],
      type: 'light'
    }
  })

  export default theme  