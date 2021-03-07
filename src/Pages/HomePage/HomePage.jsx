import React from "react";
import "./HomePage.scss";
import Img from "../../Assets/profileImg.jpg";
// import "../../main.scss";
import Button from "../../Components/Button/Button";
import Effects from "../../Components/Effects/Effects.jsx";
import OuterShadow from "../../Components/Shadow/OuterShadow";
import InnerShadow from "../../Components/Shadow/InnerShadow";
import ShadowHover from "../../Components/Shadow/ShadowHover";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function Home() {
  return (
    <>
      <Effects />
      <div className="home">
        <ShadowHover className="menu-icon">
          <IconButton style={{ color: "white" }}>
            <MenuIcon />
          </IconButton>
        </ShadowHover>
        <div className="home__container">
          <div className="home-text">
            <div className="home-text__container">
              <p>Hello</p>
              <h2>I'm Deep Makadiya</h2>
              <h1>Web Designer & Developer</h1>
              <Button>More About Me</Button>
            </div>
          </div>
          <div className="home-img">
            <div className="home-img__container">
              <div className="img-box">
                <OuterShadow circle={true}>
                  <img src={Img} alt="profile-pic" />
                </OuterShadow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
