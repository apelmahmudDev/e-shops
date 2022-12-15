import { useSelector } from "react-redux";
import { Button } from "../../ui";
import { EditIcon, HistoryIcon, PlusIcon } from "../icons";

const CartFooter = () => {
	const cart = useSelector((state) => state.cart);

	// subtotal
	const subtotal = cart?.cart.reduce(
		(acc, product) => acc + product.price * product.quantity,
		0
	);

	//  Tax - 2%
	const tax = subtotal * (1.5 / 100);

	// shipping charge
	const shippingCharge = 20;

	const discount = (subtotal + tax + shippingCharge) * (2 / 100);

	// total
	const total = subtotal + tax + shippingCharge - discount;

	return (
		<div>
			{cart?.cart && cart?.cart.length ? (
				<>
					{/* cart calculation */}
					<div className="my-8 flex justify-end text-right">
						<div className="min-w-[300px]">
							{/* item */}
							{[
								{ title: "Sub Totoal", money: subtotal || 0 },
								{ title: "Tax", money: tax || 0 },
								{ title: "Shipping", money: shippingCharge || 0 },
								{
									title: "Discount on Cart",
									money: discount || 0,
									isDiffrent: true,
								},
							].map((item) => (
								<div
									key={item.title}
									className="py-2 border-t flex items-center justify-between gap-4"
								>
									<p
										className={`${
											item.isDiffrent
												? "text-primary font-semibold"
												: "text-secondary"
										}  text-sm`}
									>
										{item.title}
									</p>
									<p className="text-gray-600 font-semibold text-xl">
										${item.money.toFixed(2)}
									</p>
								</div>
							))}
						</div>
					</div>
					{/* total big full width */}
					<div className="w-full bg-light flex items-center justify-between py-3 px-2 rounded-sm">
						<p className="text-primary text-base">
							Products Count ({cart?.cart ? cart.cart.length : 0})
						</p>
						<div className="flex items-center justify-between gap-4 lg:gap-32 ">
							<p className="text-primary text-2xl font-bold">Total</p>
							<p className="text-primary text-2xl font-bold">
								${total.toFixed(2)}
							</p>
						</div>
					</div>
				</>
			) : null}

			{/* flex icon button */}
			<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
				<Button startIcon={<EditIcon />}>Cancel</Button>
				<Button startIcon={<EditIcon />}>Hold</Button>
				<Button startIcon={<HistoryIcon />}>Discount</Button>
				<Button startIcon={<PlusIcon />}>Play Now</Button>
			</div>
		</div>
	);
};

export default CartFooter;
