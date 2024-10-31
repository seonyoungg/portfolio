import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../img/logo.png';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavTop = () => {
  const menuList = [
        '여성',
        '남성',
        '어른',
        '아이',
        '공통',
  ];

  const navigate = useNavigate();
  const goToLogin = ()=>{
    navigate('/login');
  };

  return (
    <div className='nav-top-wrap'>
        <div>
            <div className='login-btn' onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser}/>
                <div>login</div>
            </div>
        </div>
        <div className='logo-img-item'>
          <img src={logo} alt="Logo"/>
        </div>
        <div className='nav-menu-wrap'>
          <div className="d-flex">
              {menuList.map(menu=><div>{menu}</div>
              )}
          </div>
          <div className='input-outter d-flex'>
              <input type="text"
                     placeholder='검색어를 입력해주세요.'/>
              <FontAwesomeIcon icon={faSearch}/>
          </div>
        </div>
    </div>
  )
}

export default NavTop
