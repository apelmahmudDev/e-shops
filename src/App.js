import CartContainer from "./components/CartContainer";
import ProductContainer from "./components/ProductContainer";

function App() {
	return (
		<div className="mb-10 container">
			<div className="md:grid md:grid-cols-2 gap-8">
				<div>
					<CartContainer />
				</div>
				<div>
					<ProductContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
