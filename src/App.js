import "./App.css";
import Home from "./screens/Home";
import About from "./screens/About";
import Formiks from "./screens/Formiks";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import { Box, Container,Flex  } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Flex  w='100%' flexWrap='wrap'>
        <Header />
        <Box  w='100%'  my='5'>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/formiks" element={<Formiks />} />
            </Routes>
          </Container>
        </Box>
        <Footer />
      </Flex>
    </div>
  );
}

export default App;
