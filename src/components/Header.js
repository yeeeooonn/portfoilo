import styles from './Header.module.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

function Header() {
	const [isToggled, setisToggled] = useState(false);
	const toggleActive = (event) => {
		setisToggled((current) => !current);
	};

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__logo}>
				<FontAwesomeIcon icon={faHotjar} className={styles.navbar__icon} />
				<a href='#'>LeeSooyeon</a>
			</div>
			<div
				className={
					isToggled ? styles.navbar__menu_toggled : styles.navbar__menu
				}
			>
				<li>
					<NavLink
						to='/'
						style={({ isActive }) => ({
							color: isActive ? '#ffdd71' : 'black',
						})}
					>
						HOME
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'about'}
						style={({ isActive }) => ({
							color: isActive ? '#ffdd71' : 'black',
						})}
					>
						ABOUT
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'timeline'}
						style={({ isActive }) => ({
							color: isActive ? '#ffdd71' : 'black',
						})}
					>
						TIMELINE
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'skills'}
						style={({ isActive }) => ({
							color: isActive ? '#ffdd71' : 'black',
						})}
					>
						SKILLS
					</NavLink>
				</li>
				<li>
					<NavLink
						to={'project'}
						style={({ isActive }) => ({
							color: isActive ? '#ffdd71' : 'black',
						})}
					>
						PROJECT
					</NavLink>
				</li>
			</div>
			<a
				value={isToggled}
				className={styles.navbar__toggleBtn}
				onClick={toggleActive}
			>
				<FontAwesomeIcon icon={faBars} />
			</a>
		</nav>
	);
}

export default Header;
