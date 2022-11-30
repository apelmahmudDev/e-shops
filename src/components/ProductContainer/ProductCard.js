import { PlusIcon } from "../icons";

const ProductCard = () => {
	return (
		<div className="w-40 bg-white shadow-lg border border-light">
			<div className="w-full h-36">
				<img
					className="w-full h-full block object-cover"
					src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
					alt="man"
				/>
			</div>

			<p className="bg-white text-center p-1 text-secondary border-t border-light">
				Pure White Polo
			</p>
			<div className="flex justify-around items-center bg-light p-1">
				<p className="text-center font-semibold text-secondary text-lg">$43</p>
				<button
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
