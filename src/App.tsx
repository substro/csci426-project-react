import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignInSide from "./components/signIn";
import Settings from "./components/pages/Settings";
import SignUp from "./components/pages/signUp";
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
