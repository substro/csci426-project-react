import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SignInSide from "./components/signIn";
import SignUp from "./components/signUp";
import MainLayout from "./layouts/MainLayout";
import { routes } from "./routes/Routes";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<SignUp />
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
