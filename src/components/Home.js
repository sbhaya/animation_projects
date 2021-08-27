import React from "react";
import queen from "../assets/queen.jpg";
import ThePerception_logo from "../assets/ThePerception_logo.png";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    y: -140,
    transition: {
      ease: "easeInOut",
      duration: 4,
      repeatType: "reverse",
      repeat: 1,
    },
  },
};

const labelVariant = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    y: -380,
    transition: {
      ease: "anticipate",
      duration: 3,
      delay: 6,
      repeatType: "reverse",
      repeat: 1,
      width: "50%",
    },
  },
};

const Home = () => {
  return (
    <>
      <div className="home">
        <motion.div
          variants={containerVariant}
          className="card"
          initial="hidden"
          animate="show"
        >
          <img src={queen} alt="queen" className="image"></img>
        </motion.div>
        <motion.div
          variants={labelVariant}
          initial="hidden"
          animate="show"
          className="title-card"
        >
          <div className="col">Hello Queen</div>
          <div className="col">
            <img
              src={ThePerception_logo}
              alt="ThePerception_logo"
              className="logo"
            ></img>
            <p>Sabhya Saini</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
