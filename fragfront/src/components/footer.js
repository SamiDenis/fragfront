import React, { Component } from "react";
import "./footer.css";
// import face from "./images/face.png";
// import twit from "./images/twitter_PNG9.png";
// import insta from "./images/new-instagram-logo-png-transparent-light.png";
// import yt from "./images/IMG_0123.PNG";
import ft from "./images/fooooot.png";

class Footer extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="apps">
                {/* <img src={face} className="apps" />

                <img src={twit} className="apps" />

                <img src={insta} className="apps" />

                <img src={yt} className="apps" /> */}

                <img src= { ft } className="apps" />

            </div>

        );
    }
}

export default Footer;