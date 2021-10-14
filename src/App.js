
import React from "react";
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Nav from './components/NavBar';
import Footer from './components/Footer';

import './App.css';

function App() {
    return(
        <Router >
            <div>
                <Nav/>
                    <Switch>
                        <Route exact path = '/' component={About}/>
                        <Route exact path = '/portfolio/' component={Portfolio}/>
                        <Route exact path = '/resume/' component={Resume}/>
                        <Route exact path = '/contact/' component={Contact}/>
                    </Switch>
                <Footer/>
            </div>
        </Router>
    );
}


export default App;
