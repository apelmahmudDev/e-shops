import CartContainer from "./components/CartContainer";
import ProductContainer from "./components/ProductContainer";

function App() {
	return (
		<div className="container">
			<div className="grid lg:grid-cols-2">
				{/* grid item - 1 */}
				<CartContainer />
				{/* grid item - 2 */}
				<ProductContainer />
			</div>
		</div>
	);
}

export default App;
