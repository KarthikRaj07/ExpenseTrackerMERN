export const Navbar = ({ navigate, isAuthenticated }) => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-xl font-bold text-indigo-600">ExpenseTracker</div>
            <nav className="ml-8 space-x-4 hidden sm:flex">
              <button onClick={() => navigate('/')} className="text-sm text-gray-600 hover:text-gray-900">Home</button>
              <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-600 hover:text-gray-900">Dashboard</button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <button onClick={() => navigate('/')} className="text-sm text-gray-600 hover:underline">Login</button>
                <button onClick={() => navigate('/signup')} className="text-sm font-medium text-indigo-600 hover:underline">Register</button>
              </>
            ) : (
              <button onClick={() => navigate('/')} className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600">Logout</button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
