import React from "react";
import Header from "./Components/Header";
import styled from "styled-components";
import Drive from "./Components/Drive";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Model from "./Components/Model";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <SideBar/>
        <Routes>
          <Route path="/Drive" element={<Drive />} />
        </Routes>
      </Container>
      <Model/>
    </Router>
  );
}

export default App;

const Container = styled.div`
display: flex;
`;
