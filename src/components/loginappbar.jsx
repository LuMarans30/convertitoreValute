import React from "react";
import { AppBar, Box, Toolbar, Typography, IconButton, Button } from "@mui/material";

import MenuIcon  from '@mui/icons-material/Menu';
import GoogleIcon from '@mui/icons-material/Google';

import { useGoogleLogin } from '@react-oauth/google';

export default function LoginAppBar() {

    const login = useGoogleLogin({
        onSuccess: credentialResponse => {
            console.log(credentialResponse);
        },
        onError: () => {
            console.log('Login Failed');
        },
    });

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Convertitore valute
                        </Typography>
                        <Button
                            type="button"
                            color="secondary"
                            variant="contained"
                            startIcon={<GoogleIcon />}
                            onClick={() => login()}
                        >
                            Login with Google
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
