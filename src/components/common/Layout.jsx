import React, {useState} from "react";
import {
    AppBar, Box, Container,
    createTheme,
    CssBaseline,
    FormControlLabel,
    Switch,
    ThemeProvider,
    Toolbar,
} from "@material-ui/core";
import MenuTop, {LayoutMain} from "./MenuTop";
import {BrowserRouter as Router} from "react-router-dom";

const drawerWidth = 240;
export default function Layout() {
    const themeDark = createTheme({
        typography: {
            fontFamily: "SF Pro Display Regular",
        },
        palette: {
            background: {
                paper: '#000000',
                default: '#121212'
            },
            text: {
                primary: '#fff',
            }
        }
    })

    const themeLight = createTheme({
        typography: {
            fontFamily: "SF Pro Display Regular",
        },
        palette: {
            background: {
                paper: '#FFFFFF',
                default: '#F2F2F4'
            },
        }
    })
    const [labelTheme, setLabelTheme] = useState('Light mode')
    const [dark, setDark]= useState(false)
    const handleChange = () => {
        labelTheme === "Dark mode" ? setLabelTheme('Light mode') : setLabelTheme('Dark mode')
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


