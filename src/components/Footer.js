import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function Footer(props) {
    return (
        <footer className={props.darkMode ? "dark" : ""}>
            <div className="social-container">
                <h3 classNmae="social-follow">Social Follow</h3>
                
                <a href="https://linkedin.com/in/sushmita-gupta888" target="_blank" className="linkedin social">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="size"/>
                </a>
                <a href="https://github.com/sushmita12345/" target="_blank" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="size"/>
                </a>
                <a href="https://twitter.com/Sush_mita__" target="_blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="size"/>
                </a>
                <a href="https://www.instagram.com/learnbuildteach" target="_blank" className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="size"/>
                </a>
                
            </div>

        </footer>
    )
}