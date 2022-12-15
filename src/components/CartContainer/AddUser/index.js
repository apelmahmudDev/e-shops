import { useState } from "react";
import { useSelector } from "react-redux";
import { PlusIcon } from "../../icons";
import AddUserModal from "./AddUserModal";

const AddUser = () => {
	const user = useSelector((state) => state.user);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleModal = (value) => {
		setIsOpenModal(value);
	};

	return (
		<div>
			<AddUserModal handleModal={handleModal} isOpenModal={isOpenModal} />
			<button
				onClick={() => handleModal(true)}
				className="w-full flex justify-between bg-light py-3 px-4 rounded-t-md"
			>
				{/* left site */}
				<span className="flex gap-3 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 text-primary"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
						/>
					</svg>
					<span className="text-lg font-semibold">
						{user?.user && user.user.name}
					</span>
				</span>

				<PlusIcon />
			</button>
		</div>
	);
};

export default AddUser;
