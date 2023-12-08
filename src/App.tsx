import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PreLoader from "./components/PreLoader";
import MainLayout from "./layouts/MainLayout";
import ComingSoon from "./components/ComingSoon";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" element={<ComingSoon/>} />
					<Route path="/dashboard" element={<h1>Dashboard page</h1>} />
					<Route path="/orders" element={<h1>Orders page</h1>} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
