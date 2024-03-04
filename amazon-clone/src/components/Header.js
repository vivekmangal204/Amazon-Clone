import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'
import { useStateValue } from '../Providers/StateProvider'
import {Link} from 'react-router-dom'
import { auth } from '../firebase'
const theme = createTheme();
function Header() {
    const [{ basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }
  return (
    <ThemeProvider theme={theme}>
    <div className='header'>

        <img className='header__logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
        />

    <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <SearchIcon className='header__searchIcon'/>
    </div>
    <div className='header__nav'>
    <Link to={!user && '/login'} >
        <div className='header_option' onClick={handleAuthentication}>
        <span className='header-optionL1'>Hello {!user ? 'Guest' : user.email}</span>
        <span className='header-optionL2'>{user?'Sign Out':'Sign In'}</span>
        </div>
    </Link>

    </div>
    <div className='header__nav'>
        <div className='header_option'>
        <span className='header-optionL1'>Return</span>
        <span className='header-optionL2'>& Orders</span>
        </div>
    </div>
    <div className='header__nav'>
        <div className='header_option'>
        <span className='header-optionL1'>Your</span>
        <span className='header-optionL2'>Prime</span>
        </div>
    </div>

    <Link to='/checkout'>
    <div className='header_optionBasket'>
        <ShoppingBasket /> 
        <span className='header_optionL2 header_basketCount'> {basket?.length} </span>
    </div>
    </Link>

    </div>
    </ThemeProvider>
  );
}

export default Header;
