/** @jsx jsx */
import React from "react";
import amber from "../../images/Amber_profile_footer_img.svg";
import dan from "../../images/Dan_profile_footer_img.svg";
import nicole from "../../images/Nicole_profile_footer_img.svg";
import gabe from "../../images/Gabe_profile_footer_img.svg";
import reactLogo from "../../images/react_logo_white.svg";
import pythonLogo from "../../images/python-logo-white.svg";
import flaskLogo from "../../images/flask_logo_img.svg";
// import github from "../../images/github-logo.svg"
// import linkedin from "../../images/linkedin.svg"
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { jsx } from "@emotion/react";

const Footer = () => {
  return (
    <footer
      className="Footer"
      css={{
        backgroundColor: "black",
        borderTop: "1px solid black",
        textAlign: "center",
        padding: "4px",
        width: "100%",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "100px",
      }}
    >
      <div
        className="footer_flex_all"
        css={{ display: "flex", marginTop: "0" }}
      >
        <div
          className="profileTitle"
          css={{ display: "flex", alignItems: "center" }}
        >
          <div
            css={{
              textAlign: "center",
              color: "white",
              fontSize: 10,
              marginBottom: "2rem",
              marginLeft: "1rem",
            }}
          >
            CREATED BY:
          </div>
          <div
            className="profileTitleBlock"
            css={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              marginLeft: ".15rem",
              marginRight: "10rem",
              marginTop: "0rem",
            }}
          >
            <div
              className="amber"
              css={{
                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                marginLeft: ".15rem",
                marginRight: "0",
              }}
            >
              <img
                className="profilePicAmber"
                src={amber}
                alt="new"
                css={{
                  paddingRight: 0,
                }}
              />
              <div
                css={{
                  color: "white",
                  marginTop: "4",
                  fontSize: 15,
                  marginLeft: "-1rem",
                }}
              >
                Amber Horn
              </div>
              <a href="https://github.com/AmberJolieH">
                <GitHubIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
              <a href="https://www.linkedin.com/in/amber-horn-202743152">
                <LinkedInIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
            </div>

            <div
              className="Nicole"
              css={{
                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                marginLeft: ".15rem",
                marginRight: "0",
              }}
            >
              <img
                className="profilePicNicole"
                src={nicole}
                alt="new"
                css={{
                  paddingRight: "1rem",
                }}
              />
              <div
                css={{
                  color: "white",
                  marginTop: "3",
                  fontSize: 15,
                  marginLeft: "-1rem",
                }}
              >
                Nicole Loescher
              </div>
              <a href="https://github.com/nicole-loescher">
                <GitHubIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
              <a href="https://www.linkedin.com/in/nicole-marie-loescher/">
                <LinkedInIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
            </div>
            <div
              className="Dan"
              css={{
                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                marginLeft: ".15rem",
                marginRight: "0",
              }}
            >
              <img
                className="profilePic"
                src={dan}
                alt="new"
                css={{
                  paddingRight: "1rem",
                }}
              />
              <div
                css={{
                  color: "white",
                  marginTop: "4",
                  fontSize: 15,
                  marginLeft: "-1rem",
                }}
              >
                Daniel Upchurch
              </div>
              <a href="https://github.com/dupchurch93">
                <GitHubIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
              <a href="https://www.linkedin.com/in/daniel-upchurch-058899205/">
                <LinkedInIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
            </div>
            <div
              className="Gabe"
              css={{
                display: "flex",
                alignSelf: "flex-start",
                alignItems: "center",
                marginLeft: ".15rem",
                marginRight: "0",
              }}
            >
              <img
                className="profilePic"
                src={gabe}
                alt="new"
                css={{
                  paddingRight: "0rem",
                }}
              />
              <div
                css={{
                  color: "white",
                  marginTop: "4",
                  fontSize: 15,
                  marginLeft: "-1rem",
                }}
              >
                Gabriel Gutierrez
              </div>
              <a href="https://github.com/OptimumMars">
                <GitHubIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
              <a href="https://www.linkedin.com/in/gabriel-gutierrez-100451204">
                <LinkedInIcon css={{ color: "white", marginLeft: ".5rem" }} />
              </a>
            </div>
          </div>
        </div>
        <div
          className="langLogoBlock"
          css={{
            display: "flex",
            alignItems: "center",
            marginLeft: "0rem",
            marginTop: "0rem",
            alignSelf: "flex-start",
          }}
        >
          <div
            css={{
              textAlign: "center",
              color: "white",
              fontSize: 10,
              marginBottom: "2rem",
              marginLeft: "-5rem",
            }}
          >

          </div>
        </div>
        <div>
          <img
            className="langLogo"
            src={pythonLogo}
            alt="new"
            css={{
              padding: "0rem",
              marginBottom: "2rem",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
        </div>
        <div>
          <img
            className="reactLogo"
            src={reactLogo}
            alt="new"
            css={{
              padding: "0rem",
              marginBottom: "2rem",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
        </div>
        <div>
          <img
            className="flaskLogo"
            src={flaskLogo}
            alt="new"
            css={{
              padding: "0rem",
              marginBottom: "2rem",
              marginRight: "1rem",
              marginLeft: "1rem",
            }}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
