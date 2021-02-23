/** @jsx jsx */
import { jsx } from "@emotion/react";
import SearchBar from "./SearchBar"


const SplashPage = () => {
    return (
        <div className="splashPage__container"
        css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <h2 css={{
                fontSize: "3rem",
                fontWeight: "bolder",
                margin: "1rem"
            }}>BRINGING <span css={{color: "rgb(149, 181, 60)"}}>UNITY</span> TO THE TABLE</h2>
            <SearchBar></SearchBar>
        </div>
    )
}

export default SplashPage
