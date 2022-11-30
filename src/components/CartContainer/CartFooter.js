import { Button } from "../../ui";
import { EditIcon, HistoryIcon, PlusIcon } from "../icons";

const CartFooter = () => {
	return (
		<div>
			{/* cart calculation */}
			<div className="my-8 flex justify-end text-right">
				<div className="min-w-[300px]">
					{/* item */}
					{[
						{ title: "Sub Totoal", money: 5025.5 },
						{ title: "Tax", money: 25.5 },
						{ title: "Shipping", money: 5.5 },
						{ title: "Discount on Cart", money: 10, isDiffrent: true },
					].map((item) => (
						<div
							key={item.title}
							className="py-2 border-t flex items-center justify-between gap-4"
						>
							<p
								class={`${
									item.isDiffrent
										? "text-primary font-semibold"
										: "text-secondary"
								}  text-sm`}
							>
								{item.title}
							</p>
							<p class="text-gray-600 font-semibold text-xl">
								${item.money.toFixed(2)}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* total big full width */}
			<div class="w-full bg-light flex items-center justify-between py-3 px-2 rounded-sm">
				<p className="text-primary text-base">Products Count (13)</p>
				<div className="flex items-center justify-between gap-32 ">
					<p className="text-primary text-2xl font-bold">Total</p>
					<p className="text-primary text-2xl font-bold">
						${(500.0).toFixed(2)}
					</p>
				</div>
			</div>
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
