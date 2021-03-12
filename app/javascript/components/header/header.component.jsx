import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../images/crown.svg'
// import CartIcon from '../cart-icon/cart-icon.component'
// import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
// import {signOutStart} from '../../redux/user/user.actions'

import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className='header'>
         
        <h1>this is the header</h1>
        <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
        {
        currentUser ?(
            <Link className='option' to='/'>
                SIGN IN
            </Link>

        ) : (
            <Link className='option' to='/signin'>
                SIGN IN
            </Link>
        )}
    </div>
)

const mstp = createStructuredSelector({
    currentUser: selectCurrentUser,
    // hidden: selectCartHidden
})
const mdtp = dispatch => ({
    // signOutStart: ()=> dispatch(signOutStart()),
})
export default connect(mstp, mdtp)(Header);