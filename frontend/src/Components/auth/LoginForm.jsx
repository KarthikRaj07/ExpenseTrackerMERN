export const LoginForm = ({ onLogin, onForgot }) => (
	<div className="p-6 max-w-sm mx-auto bg-white rounded shadow">
		<h2 className="text-2xl mb-4 font-semibold text-gray-800">Login</h2>

		<label className="text-sm text-gray-600">Email</label>
		<input
			className="border w-full p-2 mb-3 rounded mt-1"
			placeholder="you@example.com"
			type="email"
			name="email"
			aria-label="email"
		/>

		<label className="text-sm text-gray-600">Password</label>
		<input
			className="border w-full p-2 mb-3 rounded mt-1"
			placeholder="Password"
			type="password"
			name="password"
			aria-label="password"
		/>

		<div className="flex items-center justify-between mb-4">
			<div />
			<button
				type="button"
				onClick={onForgot}
				className="text-sm text-indigo-600 hover:underline"
			>
				Forgot password?
			</button>
		</div>

		<button
			onClick={onLogin}
			className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
		>
			Login
		</button>
	</div>
);