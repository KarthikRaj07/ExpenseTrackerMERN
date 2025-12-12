// components/auth/ForgotPasswordForm.jsx
export const ForgotPasswordForm = ({ onBack, onReset }) => (
	<div className="p-6 max-w-sm mx-auto bg-white rounded shadow">
		<h2 className="text-2xl mb-4 font-semibold text-gray-800">Reset Password</h2>

		<label className="text-sm text-gray-600">New password</label>
		<input className="border w-full p-2 mb-3 rounded mt-1" placeholder="New password" type="password" name="newPassword" />

		<label className="text-sm text-gray-600">Confirm new password</label>
		<input className="border w-full p-2 mb-4 rounded mt-1" placeholder="Re-enter new password" type="password" name="confirmPassword" />

		<button onClick={onReset} className="bg-blue-600 text-white w-full py-2 rounded mb-3 hover:bg-blue-700">Reset Password</button>
		
	</div>
);