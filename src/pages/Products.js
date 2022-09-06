import { Link } from "react-router-dom";

const Products = () => {
	return (
		<section>
			<h1>The Products Page</h1>
			<ul>
				<li>
					<Link to="/products/p1">A Book</Link>
				</li>
				<li>
					<Link to="/products/p2">A Carpet</Link>
				</li>
				<li>
					<Link to="/products/p3">An Online Course</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;

// Link: Provides declarative, accessible navigation around your application.
// to="": A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
