import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Router>
                <NavMenu />
                <ScrollToTop />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}
