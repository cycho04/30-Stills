import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <a href='https://www.linkedin.com/in/chrisycho' target="_blank">
               <i className='linkedin icon header-icon'/> 
            </a>
            <a href='https://github.com/cycho04' target='_blank'>
                <i className='github icon header-icon'/>   
            </a>
        </div>
    )
}

export default Header;