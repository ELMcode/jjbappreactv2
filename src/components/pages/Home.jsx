import React, {useState} from "react";
import { motion } from "framer-motion";
import { Container, Typography, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
            <div style={{ flex: 1, backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Container maxWidth="md" sx={{ textAlign: "center" }}>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    >
                        <Typography variant="h2" gutterBottom sx={{ fontFamily: 'SF Pro Display Regular', fontSize: '3.2rem' }}>
                            Découvrez l'univers du Jiu-Jitsu Brésilien
                        </Typography>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'SF Pro Display Light Italic', fontSize: '1.5rem' }}>
                            Votre source d'information sur le Jiu-Jitsu Brésilien, les combattants, les techniques, les tournois et les clubs.
                        </Typography>
                    </motion.div>
                </Container>
            </div>

            {/* Tab section */}
            <div style={{ backgroundColor: "#f2f2f4", padding: "0px 0", minHeight: "180px" }}>
                <Container maxWidth="md" sx={{ textAlign: "center" }}>
                    <Tabs value={tabValue} onChange={handleChangeTab} indicatorColor="primary" textColor="primary" centered>
                        <Tab label="À propos" />
                        <Tab label="Contact" />
                    </Tabs>

                    {tabValue === 0 && (
                        <div>
                            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'SF Pro Display Light Italic', fontSize: '1rem' }}>
                                Ce site est en early developpement, codé en React à l'aide de{" "}
                                <Link to="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
                                    Material UI
                                </Link>,
                                <Link to="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">
                                    Framer Motion
                                </Link> et
                                <Link to="https://reactrouter.com/en/main" target="_blank" rel="noopener noreferrer">
                                    React Router
                                </Link>
                            </Typography>
                        </div>
                    )}

                    {tabValue === 1 && (
                        <div>
                            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'SF Pro Display Light Italic', fontSize: '1rem' }}>
                                elm.dev.code@gmail.com
                            </Typography>
                        </div>
                    )}
                </Container>
            </div>
        </motion.div>
    );
}
