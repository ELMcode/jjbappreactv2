import React, {useState} from "react";
import {
    AppBar, Box, Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Switch,
    ThemeProvider,
    Toolbar,
    Typography,
} from "@material-ui/core";
import MenuTop, {LayoutMain} from "./MenuTop";
import {BrowserRouter as Router} from "react-router-dom";
import Belts from "../pages/Belts";

const drawerWidth = 240;
export default function Layout() {
    const themeDark = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight:'bold'
        },
        palette: {
            background: {
                paper: '#002241',
                default: '#3c4e62'
            },
            text: {
                primary: '#fff',
            }
        }
    })

    const themeLight = createTheme({
        palette: {
            background: {
                paper: '#ececec',
                default: '#d8e8f6'
            },
        }
    })
    const [labelTheme, setLabelTheme] = useState('Theme sombre')
    const [dark, setDark]= useState(true)
    const handleChange = () => {
        labelTheme === "Theme sombre" ? setLabelTheme('Theme clair') : setLabelTheme('Theme sombre')
    }

    return (
        <Router>
            <ThemeProvider theme={dark === true ? themeDark : themeLight}>
                <CssBaseline />
                <AppBar position="fixed"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                        color={"inherit"}
                >
                    <Container maxWidth="xl">
                        <Toolbar>
                            <MenuTop />
                            <div style={{ flexGrow: 1 }} />
                            <FormControlLabel
                                control={<Switch sx={{ m: 1 }} defaultChecked color="secondary" />}
                                onChange={handleChange}
                                onClick={dark === true ? () => { setDark(false) } : () => { setDark(true) }}
                                value={labelTheme}
                                label={labelTheme}
                            />
                        </Toolbar>
                    </Container>
                </AppBar>
                <Box component="main" sx={{ flexGrow: 1, p: 1 }} style={{marginTop: "80px", minHeight:"900px"}}>
                    <Container>
                        <LayoutMain />
                    </Container>
                </Box>
            </ThemeProvider>
        </Router>

    )
}


