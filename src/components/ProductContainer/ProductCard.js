import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slice/cartSlice";
import { PlusIcon } from "../icons";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<div className="w-40 bg-white shadow-lg border border-light">
			<div className="w-full h-36">
				<img
					className="w-full h-full block object-cover"
					src={product.image}
					alt="man"
				/>
			</div>

			<p className="bg-white text-center p-1 text-secondary border-t border-light">
				{product.name}
			</p>
			<div className="flex justify-around items-center bg-light p-1">
				<p className="text-center font-semibold text-secondary text-lg">
					${product.price}
				</p>
				<button
					onClick={() => handleAddToCart(product)}
					className="inline-flex items-center text-sm font-medium  rounded-full border focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
					type="button"
				>
					<PlusIcon />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
