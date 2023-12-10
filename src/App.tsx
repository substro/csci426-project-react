import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PreLoader from './components/PreLoader';
import ComingSoon from "./components/ComingSoon";
import MainLayout from "./layouts/MainLayout";

function App() {
	return (
		<BrowserRouter>
			{/* <PreLoader /> */}
			<MainLayout>
				<Routes>
					<Route path="/" element={<ComingSoon />} />
					<Route path="/dashboard" element={<ComingSoon />} />
					<Route path="/orders" element={<ComingSoon />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
