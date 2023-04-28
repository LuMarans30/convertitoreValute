import { Card, CardContent } from '@mui/material'

import './app.css'
import LoginAppBar from './components/loginappbar'
import ConvertitoreForm from './components/convertitoreform'
import ThemeManager from './components/utils/thememanager'
import { GoogleOAuthProvider } from '@react-oauth/google';

export function App() {

  return (
    <>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
        <ThemeManager>
          <LoginAppBar />
          <Card sx={{ borderRadius: 10 }}>
            <CardContent>
              <ConvertitoreForm />
            </CardContent>
          </Card>
        </ThemeManager>
      </GoogleOAuthProvider>
    </>
  )
}
