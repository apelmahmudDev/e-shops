import AddUser from "./AddUser";
import Cart from "./Cart";
import CartNav from "./CartNav";

const CartContainer = () => {
	return (
		<div>
			<CartNav />
			<AddUser />
			<Cart />
		</div>
	);
};

export default CartContainer;
