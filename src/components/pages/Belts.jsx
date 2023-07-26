import React from "react";
import { Box, Container, Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

import whiteBeltImage from "../../images/white-belt.svg";
import blueBeltImage from "../../images/blue-belt.svg";
import purpleBeltImage from "../../images/purple-belt.svg";
import brownBeltImage from "../../images/brown-belt.svg";
import blackBeltImage from "../../images/black-belt.svg";
import blackAndRedBeltImage from "../../images/black-belt.svg";
import redBeltImage from "../../images/red-belt.svg";
import PassageDeGradeSection from "../grade";


const commonBackgroundColor = "#FFFFFF";
const beltsData = [
    {
        belt: "Ceinture Blanche",
        description: "La ceinture blanche représente le début du parcours d'un pratiquant de JJB. Elle symbolise la pureté et une page blanche pour apprendre l'art.",
        image: whiteBeltImage,
    },
    {
        belt: "Ceinture Bleue",
        description: "La ceinture bleue est décernée aux pratiquants qui ont développé une compréhension de base des techniques et des concepts du JJB.",
        image: blueBeltImage,
    },
    {
        belt: "Ceinture Violette",
        description: "La ceinture violette indique un niveau de compétence plus élevé en JJB, avec des pratiquants démontrant des techniques et des compétences avancées.",
        image: purpleBeltImage,
    },
    {
        belt: "Ceinture Marron",
        description: "La ceinture marron représente un niveau de compétence proche du maître en JJB, avec des pratiquants faisant preuve de connaissances et de capacités exceptionnelles.",
        image: brownBeltImage,
    },
    {
        belt: "Ceinture Noire",
        description: "La ceinture noire est le plus haut rang en JJB, elle symbolise une maîtrise de l'art. Les ceintures noires sont considérées comme des experts et des instructeurs.",
        image: blackBeltImage,
    },
    {
        belt: "Ceinture Noir et Rouge",
        description: "La ceinture noir et rouge se situe entre la ceinture noire et la ceinture rouge. Elle représente un niveau élevé de compétence et de connaissance en JJB.",
        image: blackAndRedBeltImage,
    },
    {
        belt: "Ceinture Rouge",
        description: "La ceinture rouge est le plus haut rang en JJB, elle symbolise une maîtrise absolue de l'art. Les ceintures rouges sont considérées comme des maîtres et des légendes vivantes.",
        image: redBeltImage,
    },
];

export default function Belts() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Container>
            <Box mt={5}>
                <Grid container spacing={3} justifyContent="center" component={motion.div} variants={containerVariants} initial="hidden" animate="visible">
                    {beltsData.map((beltInfo, index) => (
                        <Grid item xs={12} sm={6} md={4} key={beltInfo.belt} component={motion.div} variants={cardVariants}>
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    backgroundColor: commonBackgroundColor,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                                    <Typography variant="h5" component="h2" gutterBottom sx={{ fontFamily: 'SF Pro Display Black Italic', fontSize: '1.3rem' }}>
                                        {beltInfo.belt}
                                    </Typography>
                                    <img src={beltInfo.image} alt={beltInfo.belt} style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                                    <Typography variant="body1" color="text.secondary" style={{ textAlign: "justify" }} sx={{ fontFamily: 'SF Pro Display Regular ', fontSize: '1.1rem' }}>
                                        {beltInfo.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <PassageDeGradeSection />
        </Container>
    );
}
