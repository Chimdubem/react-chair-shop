import React from "react";
import classes from "./Hero.module.css";
import hero from "./../Pictures/hero.jpg";

const Hero = (props) => {
  // console.log(props.text.src);

  return (
    <header className={classes.hero}>
      <div className={classes.textbox}>
        <h1 className={classes.primary}>{props.text.h1}</h1>
        <p className={classes.secondary}>{props.text.p}</p>
        <div className={classes.ctabtns}>
          <a className={classes.cta}>SHOP CHAIRS</a>
          <a className={classes.cta2}>SIGN UP</a>
        </div>
      </div>
      <div className={classes.imagebox}>
        <img src={hero} alt="hero-img" className={classes.img} />
      </div>
    </header>
  );
};

export default Hero;
