import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import './style.css'


function Nav(props) {
  const {
    pages = [],
      currentPage,
      setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
      <ul >
        {pages.map((Page) => (
          <li 
            className={`mx-5 ${
              currentPage.name === Page.name && 'navActive'
            }`}
          key={Page.name}
          >
            <span 
              onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>


          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
