import { Card, CardContent } from '@mui/material'
import './app.css'
import LoginAppBar from './components/loginappbar'
import ConvertitoreForm from './components/convertitoreform'
import ThemeManager from './components/utils/thememanager'

export function App() {

  return (
    <>
      <ThemeManager>
        <LoginAppBar />
        <Card>
          <CardContent>
            <ConvertitoreForm />
          </CardContent>
        </Card>
      </ThemeManager>
    </>
  )
}
