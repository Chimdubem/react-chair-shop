import React from "react";
import classes from "./Features.module.css";

import science from "./featuresSvg/science.svg";
import smile from "./featuresSvg/smile.svg";
import heart from "./featuresSvg/heart.svg";

const Features = (props) => {
  return (
    <section className={classes.sectionfeaures}>
      <h2 className={classes.intro}>{props.text.h2}</h2>

      <div className={classes.cols}>
        <div className={classes.col}>
          <img src={science} className={classes.colimg} />
          <h4 className={classes.colhead}>{props.text.col1h}</h4>
          <p className={classes.cold}>{props.text.col1d}</p>
        </div>

        <div className={classes.col}>
          <img src={smile} className={classes.colimg} />
          <h4 className={classes.colhead}>{props.text.col2h}</h4>
          <p className={classes.cold}>{props.text.col2d}</p>
        </div>

        <div className={classes.col}>
          <img src={heart} className={classes.colimg} />
          <h4 className={classes.colhead}>{props.text.col3h}</h4>
          <p className={classes.cold}>{props.text.col3d}</p>
        </div>
      </div>
    </section>
  );
};
export default Features;
