const Button = ({ startIcon = "", children }) => {
	return (
		<button className="flex items-center gap-3 bg-light transition duration-200 hover:bg-light-dark px-3 py-2 rounded-sm">
			{startIcon}
			<span className="text-base font-semibold text-primary">{children}</span>
		</button>
	);
};

export default Button;
