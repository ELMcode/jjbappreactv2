import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import yodaGif from "../images/yoda.gif";

const useStyles = makeStyles((theme) => ({
    section: {
        margin: "40px 0",
        textAlign: "center",
    },
    customHeading: {
        marginBottom: "40px",
        fontWeight: "bold",
    },
    illustration: {
        maxWidth: "100%",
        height: "auto",
        marginTop: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    content: {
        textAlign: "justify",
        lineHeight: 1.6,
    },
}));

export default function PassageDeGradeSection() {
    const classes = useStyles();

    return (
        <Box className={classes.section}>
            <Box className={classes.customHeading}>
                <Typography variant="h4" sx={{ fontFamily: 'SF Pro Display Black Italic ', fontSize: '1.6rem' }}>
                    Le Passage de Grade
                </Typography>
            </Box>
            <Typography variant="body1" className={classes.content} sx={{ fontFamily: 'SF Pro Display Regular ', fontSize: '1.1rem' }}>
                Le passage de grade en Jiu-Jitsu Brésilien est un processus important
                par lequel les pratiquants progressent et obtiennent des ceintures de
                couleurs différentes pour marquer leur niveau de compétence dans cet art
                martial. Le passage de grade est une reconnaissance de leur progression,
                de leur engagement et de leur maîtrise des techniques du JJB.
                <br />
                <br />
                Le passage de grade peut varier d'une académie à l'autre, mais il suit
                généralement un processus similaire, comprenant les éléments suivants :
            </Typography>
            <ol>
                <li>
                    Entraînement Régulier : Pour être admissible au passage de grade, un
                    pratiquant doit avoir suivi un entraînement régulier et démontrer une
                    compréhension approfondie des techniques du JJB.
                </li>
                <li>
                    Acquisition des Compétences : Le pratiquant doit démontrer une
                    maîtrise des techniques spécifiques associées à son niveau actuel de
                    ceinture. Cela comprend des mouvements de base, des soumissions, des
                    échappées et des transitions.
                </li>
                <li>
                    Connaissances Théoriques : En plus des compétences pratiques, le
                    pratiquant doit avoir une bonne compréhension des principes et des
                    concepts du JJB.
                </li>
                <li>
                    Démonstration Pratique : Le passage de grade implique généralement
                    une démonstration pratique devant un instructeur ou un jury. Le
                    pratiquant doit exécuter des techniques spécifiques, montrer sa
                    capacité à les appliquer lors de sparring et démontrer une
                    compréhension solide des concepts du JJB.
                </li>
                <li>
                    Évaluation : L'instructeur ou le jury évalue la performance du
                    pratiquant pendant la démonstration pratique et prend en compte son
                    attitude, son engagement, et sa progression globale lors de
                    l'entraînement.
                </li>
                <li>
                    Graduation : Une fois que le pratiquant a réussi le passage de
                    grade, il se voit décerner une nouvelle ceinture de couleur qui
                    correspond à son niveau de compétence actuel.
                </li>
            </ol>
            <Typography variant="body1" className={classes.content} sx={{ fontFamily: 'SF Pro Display Regular ', fontSize: '1.1rem' }}>
                Il est important de noter que le passage de grade en JJB est un
                processus exigeant qui demande du temps, de l'engagement et de la
                persévérance. Il n'y a pas de délai spécifique pour le passage de
                grade, car cela dépend de la fréquence d'entraînement du pratiquant et
                de sa capacité à maîtriser les techniques du JJB.
                <br />
                <br />
                En fin de compte, le passage de grade est une étape gratifiante dans le
                parcours du pratiquant de JJB, car cela marque sa progression et sa
                croissance dans cet art martial dynamique et complexe.
            </Typography>
            <img
                src={yodaGif}
                alt="Passage de Grade"
                className={classes.illustration}
            />
        </Box>
    );
}
