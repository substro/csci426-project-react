import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes/Routes";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					{routes.map((route, index) => (
						<Route key={index} {...route} />
					))}
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
