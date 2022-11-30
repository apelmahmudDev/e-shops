const Search = () => {
	return (
		<div className="bg-[#f9fafb] shadow-lg">
			<form>
				<label
					for="default-search"
					class="mb-2 text-sm font-medium text-gray-900 sr-only"
				>
					Search Product
				</label>
				<div class="relative">
					<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							aria-hidden="true"
							class="w-5 h-5 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</div>
					<input
						type="search"
						id="default-search"
						class="block w-full p-4 pl-10 text-sm text-gray-900 border border-transparent rounded-lg bg-transparent focus:ring-transparent focus:border-transparent"
						placeholder="Search Product..."
						required
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
