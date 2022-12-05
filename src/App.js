import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import Items from "./Items/Items";

import "./App.css";

const CONTENT = [
  {
    h1: "We design and build better chairs, for a better life",
    p: "In a small shop in the heart of Lisbon, we spend our days relentlessly perfecting the chair. The result is a perfect blend of beauty and comfort, that will have a lasting impact on your health.",
  },
  {
    h2: "What makes our chairs special",
    col1h: "Science meets design",
    col1d:
      "We make your needs our priority, all materials used are decided on based on thorough research and observation. Here, best remians our watchword.",

    col2h: "Maximal comfort",
    col2d:
      "What is furniture without comfort? We make furniture and comfort all in one piece. No more worries about bad postural defects due to materials used, as your health is our concern.",

    col3h: "Ethical and sustainable",
    col3d:
      "Our chairs have gone through observations and made from 100% natural materials. They are environment friendly and durable with longetivity like no other.",
  },
  {
    h3: "These are even more special than can be described",
    p: "A work of art, an exceptional masterpiece. These chairs are the full package; quality, classy, homely... just name it, it has it all. It comes with its own statement,  ",
    customers: "-Mary and Sarah Johnson",
  },
  {
    item1head: "The Laid Back",
    item1f1: "Leisure and relaxing",
    item1f2: "Comfortable for 4h",
    item1f3: "Vegan leather",
    item1f4: "Weighs 16kg",
    price1: "$200",

    item2head: "The Worker Bee",
    item2f1: "Work",
    item2f2: "Comfortable for 8h",
    item2f3: "Vegan leather",
    item2f4: "Weighs 2kg",
    price2: "$415",

    item3head: "The Chair 4/2",
    item3f1: "Leisure and relaxing",
    item3f2: "Comfortable all day!",
    item3f3: "Organic curtain",
    item3f4: "Weighs 80kg",
    price3: "$1000",
  },
];

const App = () => {
  return (
    <div className="app">
      <Hero text={CONTENT[0]} />
      <Features text={CONTENT[1]} />
      <Testimonial text={CONTENT[2]} />
      <Items text={CONTENT[3]} />
      <footer>
        Copyright &copy; 2027 by Jonas Schmedtmann. Part of "Build Responsive
        Real-World Websites with HTML and CSS" online course. Use for learning
        purposes only.
      </footer>
    </div>
  );
};

export default App;
