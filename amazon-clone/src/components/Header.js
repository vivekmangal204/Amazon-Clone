import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search'
import { ShoppingBasket } from '@material-ui/icons'
const theme = createTheme();
function Header() {
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
        <div className='header_option'>
        <span className='header-optionL1'>Hello</span>
        <span className='header-optionL2'>Sign In</span>
        </div>
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

    <div className='header_optionBasket'>
        <ShoppingBasket /> 
        <span className='header_optionL2 header_basketCount'> 0 </span>
    </div>

    </div>
    </ThemeProvider>
  );
}

export default Header;
