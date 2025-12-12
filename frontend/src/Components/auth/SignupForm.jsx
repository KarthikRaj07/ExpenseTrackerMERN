export const SignupForm = ({ onSignup }) => (
	<div className="p-6 max-w-sm mx-auto bg-white rounded shadow">
		<h2 className="text-2xl mb-4 font-semibold text-gray-800">Create account</h2>

		<label className="text-sm text-gray-600">Name</label>
		<input className="border w-full p-2 mb-3 rounded mt-1" placeholder="Full name" name="name" />

		<label className="text-sm text-gray-600">Phone number</label>
		<input className="border w-full p-2 mb-3 rounded mt-1" placeholder="Phone number" name="phone" />

		<label className="text-sm text-gray-600">Email</label>
		<input className="border w-full p-2 mb-3 rounded mt-1" placeholder="you@example.com" name="email" type="email" />

		<label className="text-sm text-gray-600">Password</label>
		<input className="border w-full p-2 mb-4 rounded mt-1" placeholder="Password" type="password" name="password" />

		<button onClick={onSignup} className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">Register</button>
	</div>
);