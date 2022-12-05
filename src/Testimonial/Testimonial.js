import React from "react";
import classes from "./Testimonial.module.css";
import customer from "./../Pictures/customers.jpg";

const Testimonial = (props) => {
  return (
    <section className={classes.testimonial}>
      <div>
        <img src={customer} className={classes.testimonialimg} />
      </div>

      <div className={classes.testimonialbox}>
        <h3 className={classes.testimonialhead}>"{props.text.h3}"</h3>
        <blockquote className={classes.testimonalquote}>
          {props.text.p}
        </blockquote>
        <p className={classes.customers}>{props.text.customers}</p>
      </div>
    </section>
  );
};

export default Testimonial;
