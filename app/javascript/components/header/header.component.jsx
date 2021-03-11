import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg'
// import CartIcon from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
// import { selectCurrentUser } from '../../redux/user/user.selector';
// import {signOutStart} from '../../redux/user/user.actions'

import './header.styles.scss';

const Header = () => (
    <div className='header'>
         
        <h1>this is the header</h1>
    </div>
)

const mstp = createStructuredSelector({
    
})
const mdtp = dispatch => ({
   
})
export default connect(mstp, mdtp)(Header);