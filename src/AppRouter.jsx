import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Profil from "./Pages/Profil";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import App from "./App";

const AppRouter = () => {
    return (
        <Router>
            <navbar bg="dark" varian="dark">
            <Nav>
                <nav.Link as={Link} to="/Contact">Contact</Link>
                <Nav.Link as={Link} to="/">Home</Link>
                <Nav.Link as={Link} to="/Profil">Profil</Link>
                <Nav.Link as={Link} to="/About">About</Link>
            </Nav>
            <Routes>
                <Route path="/Contact" element={<Contact />}></Route>
                <Route path="/" element={<App />} />
                <Route path="/About" element={<About />} />
                <Route path="/Profil" element={<Profil />} />

            </Routes>
        </Router>
    )
}
export default AppRouter;
