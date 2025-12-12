import { LoginForm } from "../Components/auth/LoginForm";

export const LoginPage = ({ navigate }) => (
	<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-white p-6">
		<div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
			<h1 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Sign in to your account</h1>
			<p className="text-sm text-gray-500 mb-6 text-center">Enter your credentials to access the dashboard</p>
			<LoginForm onLogin={() => navigate("/dashboard")} onForgot={() => navigate("/forgot")} />

			<div className="mt-6 text-center">
				<span className="text-sm text-gray-600">Don't have an account?</span>
				<button
					onClick={() => navigate("/signup")}
					className="ml-2 text-sm font-medium text-indigo-600 hover:underline"
				>
					Register
				</button>
			</div>
		</div>
	</div>
);