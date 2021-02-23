/** @jsx jsx */
import React from "react"
import amber from "./../images/Amber_profile_footer_img.svg"
import dan from "./../images/Dan_profile_footer_img.svg"
import nicole from "./../images/Nicole_profile_footer_img.svg"
import gabe from "./../images/Gabe_profile_footer_img.svg"
import reactLogo from "./../images/react_logo_white.svg"
import pythonLogo from "./../images/python_logo.svg"
import flaskLogo from "./../images/flask_logo_img.svg"
import { jsx } from '@emotion/react'

const Footer = () => {
	return (
		<footer

			className="Footer"
			css={{
				width: "100%",
				backgroundColor: "black",
				// padding: "3.0rem 1rem",
				boxSizing: "border-box",
				marginTop: "600px"
			}}
		>

			<p
				css={{
					textAlign: "center",
					color: "white",
					fontSize: 15,
					marginLeft: "135.8px"
				}}
			>
				Created in collaboration by:

			</p>
			<div
				css={{
					fontSize: 22,
					display: "flex",
					justifyContent: "center",
					alignItems: "flex-end"
				}}
			>


            <div>
				<img className="profilePic"
					src={amber}
					alt="new"
					css={{
					}}
				/>
                    <a href="https://github.com/AmberJolieH">
                        <i
                            css={{ color: "white" }}
                            className="fab fa-github"
                        ></i>
                    </a>
                        <a href="https://www.linkedin.com/in/amber-horn-202743152">
                        <i
                            css={{ color: "white" }}
                            className="fab fa-linkedin"
                        ></i>
                    </a>
			</div>
                <img className="profilePic"
					src={nicole}
					alt="new"
					css={{
					}}
				/>
                <img className="profilePic"
					src={dan}
					alt="new"
					css={{
					}}
				/>
                <img className="profilePic"
					src={gabe}
					alt="new"
					css={{
					}}
				/>
                    <img className="profilePic"
					src={reactLogo}
					alt="new"
					css={{
					}}
                />
                    <img className="profilePic"
					src={pythonLogo}
					alt="new"
					css={{
					}}
				/>
                />
                    <img className="profilePic"
					src={flaskLogo}
					alt="new"
					css={{
					}}
				/>
			</div>


		</footer>
	);
};

export default Footer;