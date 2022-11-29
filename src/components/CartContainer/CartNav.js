import { Button } from "../../ui";
import { EditIcon, MenuIcon, HistoryIcon, PlusIcon } from "../icons";

const CartNav = () => {
	return (
		<nav className="my-4">
			<div className="flex items-center gap-5 flex-wrap">
				<button>
					<MenuIcon />
				</button>
				<Button startIcon={<EditIcon />}>Note</Button>
				<Button startIcon={<EditIcon />}>Shipping</Button>
				<Button startIcon={<HistoryIcon />}>Hold Orders</Button>
				<Button startIcon={<PlusIcon />}>New Item</Button>
			</div>
		</nav>
	);
};

export default CartNav;
