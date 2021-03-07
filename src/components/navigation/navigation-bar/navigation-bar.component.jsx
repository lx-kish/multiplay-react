import React from 'react';

import BurgerIcon from '../burger icon/icon-burger.component';
import SlideBar from '../slide bar/slide-bar.component';

import siteMenu from '../siteMenu';

const NavigationBar = (props) => {
	/**
   * Application navigation menu component
   * 
   * 
   */

	return (
		<div className="navigation" ref={props.menuRef}>
			<BurgerIcon open={props.open} setOpen={props.setOpen} />
			<SlideBar open={props.open} links={siteMenu} hideSliderMenu={props.hideSliderMenu} />
		</div>
	);
};

export default NavigationBar;
