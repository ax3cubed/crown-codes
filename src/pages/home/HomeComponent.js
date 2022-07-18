import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home({theme, setTheme}) {
  console.log({theme, setTheme}, "home");
  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Home;
