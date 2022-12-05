import React from "react";
import classes from "./Items.module.css";

import LB from "./../Pictures/chair-1.jpg";
import WB from "./../Pictures/chair-2.jpg";
import C4 from "./../Pictures/chair-3.jpg";

import star from "./CardSvg/star.svg";
import clock from "./CardSvg/clock.svg";
import globe from "./CardSvg/globe.svg";
import box from "./CardSvg/box.svg";

const Items = (props) => {
  return (
    <section className={classes.sectionitems}>
      <h2 className={classes.intro}>Our bestselling chairs</h2>

      <div className={classes.itemslist}>
        <div className={classes.item1}>
          <div className={classes.imagebox}>
            <img src={LB} className={classes.itemimg} />
          </div>

          <div className={classes.textbox}>
            <div className={classes.textboxhead}>{props.text.item1head}</div>
            <ul className={classes.textboxdetails}>
              <li>
                <img src={star} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item1f1}</p>
              </li>
              <li>
                <img src={clock} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item1f2}</p>
              </li>
              <li>
                <img src={globe} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item1f3}</p>
              </li>
              <li>
                <img src={box} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item1f4}</p>
              </li>
            </ul>
          </div>

          <div className={classes.itemcta}>
            <p className={classes.price}>{props.text.price1}</p>
            <a className={classes.cta}>ADD TO CART</a>
          </div>
        </div>

        <div className={classes.item1}>
          <div className={classes.imagebox}>
            <img src={WB} className={classes.itemimg} />
          </div>

          <div className={classes.textbox}>
            <div className={classes.textboxhead}>{props.text.item2head}</div>
            <ul className={classes.textboxdetails}>
              <li>
                <img src={star} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item2f1}</p>
              </li>
              <li>
                <img src={clock} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item2f2}</p>
              </li>
              <li>
                <img src={globe} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item2f3}</p>
              </li>
              <li>
                <img src={box} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item2f4}</p>
              </li>
            </ul>
          </div>

          <div className={classes.itemcta}>
            <p className={classes.price}>{props.text.price2}</p>
            <a className={classes.cta}>ADD TO CART</a>
          </div>
        </div>

        <div className={classes.item1}>
          <div className={classes.imagebox}>
            <img src={C4} className={classes.itemimg} />
          </div>

          <div className={classes.textbox}>
            <div className={classes.textboxhead}>{props.text.item3head}</div>
            <ul className={classes.textboxdetails}>
              <li>
                <img src={star} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item3f1}</p>
              </li>
              <li>
                <img src={clock} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item3f2}</p>
              </li>
              <li>
                <img src={globe} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item3f3}</p>
              </li>
              <li>
                <img src={box} className={classes.itemicon} />
                <p className={classes.itemfeature}>{props.text.item3f4}</p>
              </li>
            </ul>
          </div>

          <div className={classes.itemcta}>
            <p className={classes.price}>{props.text.price3}</p>
            <a className={classes.cta}>ADD TO CART</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Items;
