import { Navbar } from './Navbar';

export const Layout = ({ children, navigate, isAuthenticated = true }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar navigate={navigate} isAuthenticated={isAuthenticated} />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  );
};
