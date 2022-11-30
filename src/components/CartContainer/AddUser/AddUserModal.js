import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/slice/userSlice";

const AddUserModal = ({ handleModal, isOpenModal }) => {
	const dispatch = useDispatch();

	const [user, setUser] = useState({
		name: null,
		email: null,
		phone: null,
	});

	const handleChange = (prop) => (event) => {
		setUser({ ...user, [prop]: event.target.value });
	};

	// update user
	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(updateUser(user));
		handleModal(false);
	};

	return (
		<div
			aria-hidden="true"
			className={`fixed top-0 left-0 right-0 z-50 
            w-full p-4 overflow-x-hidden ${
							isOpenModal ? "visible" : "hidden"
						} overflow-y-auto md:inset-0 h-modal md:h-full`}
		>
			<div className="relative w-full h-full max-w-2xl md:h-auto">
				<div className="relative bg-white rounded-lg shadow-2xl">
					<div className="flex items-start justify-between p-4 border-b rounded-t">
						<h3 className="text-xl font-semibold text-gray-900">
							Add New User
						</h3>
						<button
							onClick={() => handleModal(false)}
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
							data-modal-toggle="defaultModal"
						>
							<svg
								aria-hidden="true"
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
							<span className="sr-only">Close modal</span>
						</button>
					</div>

					{/* form */}
					<form onSubmit={handleFormSubmit}>
						<div className="p-6 space-y-6">
							{/* Name */}
							<div className="mb-5">
								<label
									for="name"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Name
								</label>
								<input
									onChange={handleChange("name")}
									type="text"
									id="name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="Ibrahim"
									required
								/>
							</div>

							{/* email */}
							<div className="mb-5">
								<label
									for="email"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Email
								</label>
								<input
									onChange={handleChange("email")}
									type="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="ibrahim@gmail.com"
									required
								/>
							</div>

							{/* Phone */}
							<div className="mb-5">
								<label
									for="phone"
									class="block mb-2 text-sm font-medium text-gray-900"
								>
									Phone
								</label>
								<input
									onChange={handleChange("phone")}
									type="tel"
									id="phone"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
									placeholder="+88 36982...."
									required
								/>
							</div>
						</div>

						<div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
							<button
								type="submit"
								className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-xl px-5 py-3 text-center"
							>
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddUserModal;
