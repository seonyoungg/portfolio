import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const NavTop = () => {

  return (
    <div className='nav-top-wrap'>
        <div>
            <div className='login-btn'>
                <FontAwesomeIcon icon={faUser}/>
                <div>login</div>
            </div>
        </div>
        <div>logo</div>
        <div>menu</div>
    </div>
  )
}

export default NavTop
