import React from "react";
import { SportsKabaddi } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import { Button, IconButton, Stack } from "@mui/material";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Fighters from "../pages/Fighters";
import Techniques from "../pages/Techniques";
import Belts from "../pages/Belts";
import Clubs from "../pages/Clubs";

const itemMenus = [
    { key: "2", path: "/news", label: "Actualités" },
    { key: "3", path: "/fighters", label: "Combattants" },
    { key: "4", path: "/techniques", label: "Techniques" },
    { key: "5", path: "/belts", label: "Ceintures" },
    { key: "6", path: "/clubs", label: "Clubs" },
];

export default function MenuTop() {
    const location = useLocation();
    return (
        <>
            <IconButton
                size="large"
                edger="start"
                color="inherit"
                aria-label="logo"
                component={Link}
                to="/"
            >
                <SportsKabaddi />
                <Typography variant="h5" component="div" sx={{ fontFamily: 'SF Pro Display Black Italic' }}>
                    BJJHub
                </Typography>
                <SportsKabaddi />
            </IconButton>


            <Stack direction="row" spacing={4}>
                {itemMenus.map((itemMenu) => (
                    <Button
                        key={itemMenu.key}
                        component={Link}
                        to={itemMenu.path}
                        color="primary"
                        sx={{
                            fontFamily: 'SF Pro Display Black Italic',
                            color: location.pathname === itemMenu.path ? '#bd0808' : '#828286'
                        }}
                    >
                        {itemMenu.label}
                    </Button>
                ))}
            </Stack>
        </>
    );
}

export function LayoutMain() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"/news"} element={<News />} />
                <Route path={"/fighters"} element={<Fighters />} />
                <Route path={"/techniques"} element={<Techniques />} />
                <Route path={"/belts"} element={<Belts />} />
                <Route path={"/clubs"} element={<Clubs />} />
            </Routes>
        </>
    );
}
