import { useDispatch, useSelector } from "react-redux";
import {
	quantityIncrement,
	quantityDecrement,
	removeFromCart,
} from "../../store/slice/cartSlice";
import { DeleteIcon, EditIcon } from "../icons";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const handleRemoveFromCart = (productId) => {
		dispatch(removeFromCart(productId));
	};

	const handleQuantityIncrement = (productId) => {
		dispatch(quantityIncrement(productId));
	};

	const handleQuantityDecrement = (productId) => {
		dispatch(quantityDecrement(productId));
	};

	// if don't have any product in the cart - show the message

	if (cart?.cart?.length === 0) {
		return (
			<div className="h-32 flex items-center justify-center">
				<h3 className="text-2xl text-secondary font-semibold">
					You have no product in the cart!
				</h3>
			</div>
		);
	}

	return (
		<div>
			<div className="overflow-x-auto relative shadow-md rounded-b-md">
				<table className="w-full text-sm text-left text-gray-500">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							<th scope="col" className="py-3 pl-4 pr-6">
								Edit
							</th>
							<th scope="col" className="py-3 px-6">
								Product
							</th>
							<th scope="col" className="py-3 px-6">
								Price
							</th>
							<th scope="col" className="py-3 px-6">
								Qty
							</th>
							<th scope="col" className="py-3 px-6">
								Total Price
							</th>
							<th scope="col" className="py-3 px-6">
								Action
							</th>
						</tr>
					</thead>

					<tbody>
						{cart?.cart &&
							cart.cart.map(({ _id, image, price, name, quantity }) => (
								<tr key={_id} className="bg-white border-b  hover:bg-gray-50">
									<td className="p-4 w-32">
										<button>
											<EditIcon />
										</button>
									</td>
									<td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
										{name}
									</td>

									<td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
										${price}
									</td>

									<td className="py-4 px-6">
										<div className="flex items-center space-x-3">
											{/* decrement of porudct quantity button */}
											<button
												onClick={() => handleQuantityDecrement(_id)}
												className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
												type="button"
											>
												<span className="sr-only">Quantity button</span>
												<svg
													className="w-4 h-4"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
														clipRule="evenodd"
													></path>
												</svg>
											</button>
											<div className="bg-gray-50 w-10 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1">
												{quantity}
											</div>

											{/* increment of product quantity button */}
											<button
												onClick={() => handleQuantityIncrement(_id)}
												className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
												type="button"
											>
												<span className="sr-only">Quantity button</span>
												<svg
													className="w-4 h-4"
													aria-hidden="true"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
														clipRule="evenodd"
													></path>
												</svg>
											</button>
										</div>
									</td>
									<td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
										${price * quantity}
									</td>
									<td className="py-4 px-6">
										<button onClick={() => handleRemoveFromCart(_id)}>
											<DeleteIcon />
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Cart;
