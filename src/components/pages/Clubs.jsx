import React from "react";
import {Box, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import club1Image from "../../images/jacksonpaulo.jpg";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: 300,
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.2)",
        },
    },
    mediaBox: {
        width: { xs: "100%", md: "50%" },
        height: "100%",
        overflow: "hidden",
    },
    media: {
        objectFit: "cover",
        maxWidth: "100%",
        height: "100%",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
    contentBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
    },
    mapFrame: {
        border: 0,
        mt: 2,
    },
}));

const clubsData = [
    {
        name: "Académie Jackson Paulo",
        city: "Lille",
        description:
            "L'Académie Jackson Paulo offre un endroit unique et de qualité dans la région du Nord de la France autour du lifestyle jiu-jitsu brésilien adapté à tous ...",
        image: club1Image,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.60549331702!2d3.1152364999999995!3d50.6344451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d61c4eafe0ff%3A0xde6e12a710d77529!2sAcad%C3%A9mie%20Jackson%20Paulo!5e0!3m2!1sfr!2sfr!4v1690242155039!5m2!1sfr!2sfr"
    },
    {
        name: "Gracie Barra Paris",
        city: "Paris",
        description:
            "Gracie Barra Paris est l'une des meilleures académies de Jiu-Jitsu brésilien au cœur de Paris, offrant une formation de haute qualité et une communauté accueillante.",
        image: "https://via.placeholder.com/300",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2951594683983!2d2.3498804155478044!3d48.86471697928838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sGracie%20Barra%20Paris!5e0!3m2!1sen!2suk!4v1690242217171!5m2!1sen!2suk"
    },
    {
        name: "Académie de Jiu-Jitsu Brésilien de Marseille",
        city: "Marseille",
        description:
            "L'Académie de Jiu-Jitsu Brésilien de Marseille offre un environnement d'entraînement convivial et inclusif pour tous les âges et tous les niveaux.",
        image: "https://via.placeholder.com/300",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.567856845636!2d5.369780315422127!3d43.29398357913644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4e4c423c19%3A0x4c6f8d51e92aa9af!2sBrazilian%20Jiu%20Jitsu%20Academy%20Marseille!5e0!3m2!1sen!2suk!4v1690242265161!5m2!1sen!2suk"
    },
    {
        name: "Gracie Barra Berlin",
        city: "Berlin",
        description:
            "Gracie Barra Berlin est dédié à l'enseignement de l'art du Jiu-Jitsu brésilien dans un environnement convivial et solidaire.",
        image: "https://via.placeholder.com/300",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.9683897159023!2d13.40420461595465!3d52.51108097981193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373b78b8c3%3A0x440f3a2d3aac220!2sGracie%20Barra%20Berlin!5e0!3m2!1sen!2suk!4v1690242306511!5m2!1sen!2suk"
    },

];

export default function Clubs() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {clubsData.map((club, index) => (
                <Grid item xs={12} key={index}>
                    <Card className={classes.card}>
                        <Box className={classes.mediaBox}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={club.image}
                                alt={club.name}
                                className={classes.media} // Apply the media class
                            />
                        </Box>
                        <Box className={classes.contentBox}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {club.name}
                                    <Typography variant="subtitle1" color="text.secondary" component="span" display="inline">
                                        {" "}
                                        - {club.city}
                                    </Typography>
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                                    {club.description}
                                </Typography>
                            </CardContent>

                            <iframe
                                title={`Map of ${club.name}`}
                                src={club.mapUrl}
                                width="100%"
                                height="150"
                                className={classes.mapFrame} // Apply the mapFrame class
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
