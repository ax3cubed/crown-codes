import React, { useState } from "react";
import { Navigate as Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function AnimatedSplash(props) {
  return (
    <Loader>
      <motion.div
        animate={{
          rotate: 360,
          borderRadius: ["50% 50%", "2% 50%"],
          x: 75,
        }}
        initial={{
          x: -75,
        }}
        transition={{
          flip: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        style={{
          height: "50px",
          background: "#59d597",
          width: "50px",
          borderRadius: "2% 50%",
        }}
      ></motion.div>
    </Loader>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 4000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
