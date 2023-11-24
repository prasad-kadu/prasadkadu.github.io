/* eslint-disable no-irregular-whitespace */
/* eslint-disable max-len */
import React from "react";
import LandingPage from "../Landing/landing.js";
import About from "../About/about.js";
import Blog from "../Blog/blog.js";
import Work from "../Work/work.js";
import Talks from "../Talks/talks.js";
import NotFound from "../NotFound/404.js";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../Theme/theme.js";

/**
 * Main App function. Uses client side routing with React Router.
 * @return {ReactElement} the applicaiton!
 */
function App() {
  console.log(`
  ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░  ███╗░░░███╗██╗░░░██╗
  ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗  ████╗░████║╚██╗░██╔╝
  ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║  ██╔████╔██║░╚████╔╝░
  ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║  ██║╚██╔╝██║░░╚██╔╝░░
  ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝  ██║░╚═╝░██║░░░██║░░░
  ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░  ╚═╝░░░░░╚═╝░░░╚═╝░░░
  
  ░██████╗██╗████████╗███████╗
  ██╔════╝██║╚══██╔══╝██╔════╝
  ╚█████╗░██║░░░██║░░░█████╗░░
  ░╚═══██╗██║░░░██║░░░██╔══╝░░
  ██████╔╝██║░░░██║░░░███████╗
  ╚═════╝░╚═╝░░░╚═╝░░░╚══════╝`);
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route exact path="/work" element={<Work />}></Route>
            <Route exact path="/talks" element={<Talks />}></Route>
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
