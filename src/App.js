import React from "react";
import {BrowserRouter} from 'react-router-dom'
import './App.css'

import { Template } from "./components/MainComponents";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

import Routes from "./Routes";

function App() {
  return (
  <BrowserRouter>

    <Template>

      <Header />

      <Routes />

      <Footer />

    </Template>

  </BrowserRouter>
  );
}

export default App;
