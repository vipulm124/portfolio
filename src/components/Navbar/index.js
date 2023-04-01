import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		{/* <Bars /> */}

        <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
		<NavMenu>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/events' activeStyle>
			Skills
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Project
		</NavLink>
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
