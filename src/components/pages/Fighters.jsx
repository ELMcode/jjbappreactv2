import React, { useState } from "react";
import { Box, Container, Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import { fightersData } from "../../Api/fightersData";
import { motion } from "framer-motion";

export default function Fighters() {
    const [flippedCards, setFlippedCards] = useState({});

    // Lorsque clic, état flippedcards inversé
    const handleCardClick = (index) => {
        setFlippedCards((prevState) => ({ ...prevState, [index]: !prevState[index] }));
        // {...prevState} syntaxe de décomposition pour copier l'état précedent et update la carte selon son index dans fightersData
    };

    return (
        <Container>
            <Box mt={5}>
                <Grid container spacing={3} justifyContent="center">
                    {// utilisation de map sur le tableau fightersData pour éviter la duplication de code (même systeme que boucler)}
                        fightersData.map((fighter, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    onClick={() => handleCardClick(index)}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        borderRadius: "10px",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#FFFFFF",
                                        transformStyle: "preserve-3d",
                                        transition: "transform 0.8s",
                                        transform: flippedCards[index] ? "rotateY(180deg) rotateX(180deg)" : "rotateY(0)", // rotation gloable de la card
                                        // si l'état flippedCards est true alors 180deg (retournement carte) sinon 0deg
                                    }}
                                >
                                    <motion.div
                                        style={{
                                            display: flippedCards[index] ? "none" : "block", // rotation de la face avant
                                            transform: flippedCards[index] ? "rotateY(180deg) rotateX(180deg)" : "rotateY(0)",
                                        }}
                                    >
                                        {/* Face de la card */}
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={fighter.image}
                                            alt={fighter.name}
                                            style={{ objectFit: "cover", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "200px" }}
                                        />
                                        <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                                            <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'SF Pro Display Black Italic', fontSize: '1.3rem' }}>
                                                {fighter.name}
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: 'SF Pro Display Regular', fontSize: '1.2rem' }}>
                                                {fighter.belt}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom sx={{ fontFamily: 'SF Pro Display Regular', fontSize: '1rem' }}>
                                                {fighter.weight}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'SF Pro Display Medium', fontSize: '0.9rem' }}>
                                                Age: {fighter.age} | Team: {fighter.team}
                                            </Typography>
                                        </CardContent>
                                    </motion.div>
                                    <motion.div
                                        style={{
                                            display: flippedCards[index] ? "flex" : "none", // si état true (donc retourné), alors display flex
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            transform: flippedCards[index] ? "rotateY(180deg) rotateX(180deg)" : "rotateY(0)",
                                        }}
                                    >
                                        {/* Back de la card */}
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary" style={{ textAlign: "center" }} sx={{ fontFamily: 'SF Pro Display Regular', fontSize: '1rem' }}>
                                                {fighter.description}
                                            </Typography>
                                        </CardContent>
                                    </motion.div>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Box>
        </Container>
    );
}
