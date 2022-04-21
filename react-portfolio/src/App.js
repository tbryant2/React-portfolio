import React, { useState } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from './logo.svg';
import Homepage from './components/Homepage';
import './App.css'; 


function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "contact" },
    { name: "portfolio"},
    { name: "resume"}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  // const [pageSelected, setPageSelected] = useState(false);

  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          > </Nav>
          </Header>
        <main>
            <Homepage currentPage={currentPage}></Homepage>
      </main>
      <Footer />
    </div >
  );
}

export default App;
