import ProductCard from "./ProductCard";
import products from "../../assets/data/productsData.json";

const Product = () => {
	return (
		<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{products?.data &&
				products.data.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
		</div>
	);
};

export default Product;
