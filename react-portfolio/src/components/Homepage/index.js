import React from 'react';
import Data from '../Data';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Homepage({ currentPage }) {
    const createPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'portfolio':
                return <Portfolio />;
            case 'resume':
                return <Resume />;
        }
    };

    return (
        <section>
            {/* <h2>{capitalizeFirstLetter(currentPage.name)}</h2> */}
            <Data>{createPage()}</Data>
        </section>
    );
}
export default Homepage; 