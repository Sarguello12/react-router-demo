import { useParams } from "react-router-dom";

const ProductDetail = () => {
	const params = useParams();

	return (
		<section>
			<h1>Product Detail</h1>
			<p>{params.productId}</p>
		</section>
	);
};

export default ProductDetail;

// useParams: returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route/>
