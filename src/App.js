import React from "react";
import {
  ChakraProvider,
  Grid,
  ColorModeScript,
  GridItem,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import theme from "./theme";
import Main from "./components/Main";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav" "main"`,
          }}
          minH="100vh"
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <GridItem area="main" style={{ height: "100vh", padding: "30px" }}>
            <Routes>
              <Route path="/experience" element={<Experience />} />
              <Route path="/main" element={<Main />} />
              <Route path="/" element={<Main />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </GridItem>
          <div
            style={{
              position: "fixed",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "12px",
              color: "white",
              right: "10px",
              top: "250px",
              padding: "0px",
              backgroundColor: "#1A202C",
            }}
          >
            <div>g</div>
            <div>t</div>
            <div>e</div>
            <div>l</div>
            <div>a</div>
            <div>g</div>
            <div>i</div>
            <div>s</div>
            <div>s</div>
            <div>@</div>
            <div>g</div>
            <div>m</div>
            <div>a</div>
            <div>l</div>
            <div>.</div>
            <div>c</div>
            <div>o</div>
            <div>m</div>
            <a
              href="https://github.com/gtelagiss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ marginBottom: "10px", marginTop: "10px" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/gulzhan-telagissova/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <div
              style={{
                position: "fixed",
                right: "14px",
                top: 622,
                bottom: 0,
                width: "2px",
                backgroundColor: "#333",
              }}
            />
          </div>
        </Grid>
      </Router>
    </ChakraProvider>
  );
}

export default App;
