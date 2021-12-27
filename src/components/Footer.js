import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faGithub,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <div className="social-container">
                <h3 classNmae="social-follow">Social Follow</h3>
                
                <a href="https://www.youtube.com/c/jamesqquick" className="discord social">
                    <FontAwesomeIcon icon={faDiscord} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                
            </div>

        </footer>
    )
}