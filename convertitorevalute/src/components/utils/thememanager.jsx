import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';

export default function ThemeManager({children})
{
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = React.useState('light');

    const theme = createTheme({
        palette: {
            mode: mode
        },
    });

    React.useMemo(() =>
        setMode(prefersDarkMode ? 'dark' : 'light'),
        [prefersDarkMode]
    );

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )
}