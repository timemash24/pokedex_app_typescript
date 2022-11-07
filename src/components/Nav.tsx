/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useAppDispatch } from 'app/hooks';
import { resetPokemons } from 'app/pokemonSlice';
import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png';

function Nav() {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(resetPokemons());
  };

  return (
    <nav style={{ textAlign: 'center', padding: 30 }}>
      <Link to="/">
        <img src={LOGO_URL} alt="home" onClick={onClick} />
      </Link>
    </nav>
  );
}

export default Nav;
