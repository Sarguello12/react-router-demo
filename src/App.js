import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/welcome" />
					</Route>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/products/:productId">
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/<any value>

// Route: renders some ui (component) to the page when the path matches the current URL
// Switch: only one route will be active at the same time, the route that is matched first
// exact: used in congunction with Switch, only renders that component if it an exact match to the full path
