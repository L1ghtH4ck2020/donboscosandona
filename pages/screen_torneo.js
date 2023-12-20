import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Torneo } from '/components'

const theme = createTheme()

export default function Schermo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: 'black', height: '100vh' }}>
        <Torneo classi={classi} pizzettes={15} pizzettes1={15} autoRotate={true} />
      </div>
    </ThemeProvider>
  )
}

let classi = [
  { classe: '1A', punti: '538' },
  { classe: '1B', punti: '548' },
  { classe: '1C', punti: '528' },
  { classe: '1D', punti: '487' },
  { classe: '1E', punti: '531' },
  { classe: '1F', punti: '567' },
  { classe: '2A', punti: '502' },
  { classe: '2B', punti: '441' },
  { classe: '2C', punti: '460' },
  { classe: '2D', punti: '532' },
  { classe: '2E', punti: '434' },
  { classe: '2F', punti: '529' },
  { classe: '3A', punti: '460' },
  { classe: '3B', punti: '452' },
  { classe: '3C', punti: '390' },
  { classe: '3D', punti: '552' },
  { classe: '3E', punti: '481' },
  { classe: '3F', punti: '569' },
  { classe: '4A', punti: '490' },
  { classe: '4B', punti: '486' },
]
