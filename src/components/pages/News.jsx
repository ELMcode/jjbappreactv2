import React from "react";
import constructionGif from "../../images/construction.gif"

export default function News() {


    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={constructionGif}
                alt="GIF"
                style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}
            />
        </div>
    );
}
