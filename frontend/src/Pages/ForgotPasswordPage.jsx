import { ForgotPasswordForm } from "../Components/auth/ForgotPasswordForm";

export const ForgotPasswordPage = ({ navigate }) => (
	<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6">
		<div className="w-full max-w-md bg-white shadow rounded-lg p-8">
			<h1 className="text-2xl font-semibold text-gray-800 mb-2 text-center">Forgot Password</h1>
			<p className="text-sm text-gray-500 mb-6 text-center">Enter your email and we'll send reset instructions</p>
			<ForgotPasswordForm onBack={() => navigate("/")} onReset={() => navigate("/")} />
			
		</div>
	</div>
);