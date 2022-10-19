import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png';

function Nav() {
  return (
    <nav style={{ textAlign: 'center', padding: 30 }}>
      <Link to="/">
        <img src={LOGO_URL} alt="home" />
      </Link>
    </nav>
  );
}

export default Nav;
