import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/CreateContext';
import { Firebase } from '../../firebase/config';
import { useHistory, Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

  const history = useHistory();

  const {user} = useContext(AuthContext);

  const handleSubmit = (e) => {
      e.preventDefault();
       history.push("/login")
    }
  
    const handleCreate = (e) => {
      e.preventDefault();
       history.push("/create")
    }
    const handleHome = (e) => {
      e.preventDefault();
       history.push("/")
    }
  

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div onClick={handleHome} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input placeholder='India' type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
        <span>ENGLISH</span>
          <Arrow>
          </Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `${user.displayName}` : <button onClick={handleSubmit}>Login</button>}</span>
          <hr />
        </div>
        <div>
          {user && <Link style={{color: 'black', marginRight: '16px', fontSize:'17px', textDecoration:'underline' }} onClick={() => Firebase.auth().signOut()}>Logout</Link>}
        </div>
        <div onClick={handleCreate} className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
