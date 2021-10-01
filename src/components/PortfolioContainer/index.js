import React, { useState } from 'react';
import About from '../pages/About';
import NavBar from '../NavBar'
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import Footer from '../Footer';


function PortfolioContainer() {
    const [ currentPage, handlePageChange] = useState('About');
    
    console.log(currentPage + " current page is:");
    const renderPage = (currentPage) => {
        console.log("page rendering")
        switch( currentPage) {
            case 0:
                return <About/>
            case 1:
                return <Portfolio/>
            case 2:
                return <Contact/>
            case 3:
                return <Resume/>
            default:
                return <About/>
        }
    };

    return(
        <div>
            <NavBar currentPage = { currentPage} handlePageChange={handlePageChange}/>
        
            <div>
                {
                    renderPage()
                }
            </div>
            <Footer/>
        </div>      
    );
}

export default PortfolioContainer;