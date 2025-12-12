export const Dashboard = ({ navigate }) => (
	<div className="">
		<div className="max-w-6xl mx-auto">
			<header className="mb-6">
				<div>
					<h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
					<p className="text-sm text-gray-600">Overview of your expenses</p>
				</div>
			</header>
			<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="bg-white p-6 rounded-lg shadow">
					<div className="text-sm text-gray-500">Total Expenses</div>
					<div className="mt-2 text-2xl font-semibold text-gray-800">$1,234</div>
				</div>
				<div className="bg-white p-6 rounded-lg shadow">
					<div className="text-sm text-gray-500">Monthly Budget</div>
					<div className="mt-2 text-2xl font-semibold text-gray-800">$2,500</div>
				</div>
				<div className="bg-white p-6 rounded-lg shadow">
					<div className="text-sm text-gray-500">Remaining</div>
					<div className="mt-2 text-2xl font-semibold text-green-600">$1,266</div>
				</div>
			</section>
		</div>
	</div>
);