import { useState } from "react";
import { LoginPage } from "./Pages/LoginPage";
import { SignupPage } from "./Pages/SignupPage";
import { ForgotPasswordPage } from "./Pages/ForgotPasswordPage";
import { Dashboard } from "./Pages/Dashboard";
import { Layout } from "./Components/layout/Layout";

export default function App() {
	const [path, setPath] = useState("/");
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const navigate = (to) => setPath(to);

	if (path === "/") return <LoginPage navigate={(to) => { if (to === '/dashboard') setIsAuthenticated(true); navigate(to); }} />;
	if (path === "/signup") return <SignupPage navigate={navigate} />;
	if (path === "/forgot") return <ForgotPasswordPage navigate={navigate} />;
	if (path === "/dashboard")
		return (
			<Layout navigate={navigate} isAuthenticated={isAuthenticated}>
				<Dashboard navigate={navigate} />
			</Layout>
		);

	return <LoginPage navigate={navigate} />;
}