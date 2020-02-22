import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

const copyRight = "Copyright @2020";
const techs = ["HTML", "CSS", "JS"];
const techList = techs.map(tech => tech);

const App = () => {
  return (
    <div>
      <Header />
      <Main techList={techList} />
      <Footer copyRight={copyRight} />
    </div>
  );
};

export default App;
