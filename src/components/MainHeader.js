import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

//NavLink allows us to add additional clicked and hover styles using the activeClassName prop vs. the traditional Link tag
const MainHeader = () => {
	return (
		<header className={classes.header}>
			<nav>
				<ul>
					<li>
						<NavLink activeClassName={classes.active} to="/welcome">
							Welcome
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName={classes.active} to="/products">
							Products
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
