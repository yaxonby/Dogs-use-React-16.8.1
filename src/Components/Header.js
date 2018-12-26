import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';

const Header = () => (
    <header className='positionCenter'>
        <h1> Dog pictures </h1>
        <nav>
            <Link to='/'>
                <Fab color='default' variant='extended'>
                    <span>Home</span>
                </Fab>
            </Link>
            <Link to='/all-breeds'>
                <Fab color='default' variant='extended'>
                    <span>List all breeds</span>
                </Fab>
              </Link>
            <Link to='/random-image'>
                <Fab color='default' variant='extended'>
                    <span>Random image of dog</span>
                </Fab>
              </Link>
            <Link to='/breed-random-image'>
                <Fab color='default' variant='extended'>
                    <span> Random image breed</span>
                </Fab>
             </Link>
             <Link to='/pdf-create'>
                <Fab color='default' variant='extended'>
                    <span> Pdf create</span>
                </Fab>
             </Link>
        </nav>
    </header>
);

export default Header;