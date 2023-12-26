import ComingSoon from "../components/ComingSoon";
import Settings from "../components/pages/Settings";
import SignInSide from "../components/pages/signIn";
import SignUp from "../components/pages/signUp";

export const routes = [
	{ path: "/signup", element: <SignUp /> },
	{ path: "/signin", element: <SignInSide /> },
	{ path: "/dashboard", element: <ComingSoon /> },
	{ path: "/projects", element: <ComingSoon /> },
	{ path: "/settings", element: <Settings /> },
];
