import "./apsp.scss";
import React from "react";
import Header from "./sections/Header/Header.js";
import Statistics from "./components/statistics/statistics.js";
import Dash from "./sections/dashboard/dash.js";
import Spread from "./sections/spread/Spread.js";
import Symptoms from "./sections/symptoms/symptoms.js";
import Protect from "./sections/protect/protect.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./sections/footer/Footer";
import { Contact } from "./sections/contacts/contact";
import Nav from "./components/navBar/Nav";
import Resala from "./components/resala/resala";

function App() {
  return (
    <div className="App">
      <Nav />
      <Resala />
      <Header />
      <Statistics />
      <Dash />
      <Spread />
      <Symptoms />
      <Protect />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
