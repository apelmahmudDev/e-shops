import AddUser from "./AddUser";
import Cart from "./Cart";
import CartFooter from "./CartFooter";
import CartNav from "./CartNav";

const CartContainer = () => {
	return (
		<>
			<CartNav />
			<AddUser />
			<Cart />
			<CartFooter />
		</>
	);
};

export default CartContainer;
