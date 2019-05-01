import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.scss';
import headerStyles from './header.module.scss';

const Header = (props) => (
	<header className={headerStyles.header}>
        <nav>
            <h1 className={headerStyles.title}>{props.title}</h1>
                {/* {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>} */}
            <ul className={headerStyles.navList}>
                <li>
                    <NavLink className={headerStyles.navItem} to="/" activeClassName={headerStyles.activeNavItem} exact={true}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
                </li>
            </ul>
        </nav>
	</header>
);

Header.defaultProps = { // using default props
	title: 'Portfolio'
};

export default Header;
