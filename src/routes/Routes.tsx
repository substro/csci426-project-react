import ComingSoon from "../components/ComingSoon";
import SignInSide from "../components/signIn";
import SignUp from "../components/signUp";

export const routes = [
	{ path: "/signup", element: <SignUp /> },
	{ path: "/signin", element: <SignInSide /> },
	{ path: "/dashboard", element: <ComingSoon /> },
	{ path: "/orders", element: <ComingSoon /> },
];
