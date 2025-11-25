import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[#1a1a3e] text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white">T</span>
          </div>
          <span className="font-bold text-xl">TeeFi</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-gray-300 hover:text-white transition">Use educare font</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Our tutors</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Learning plans</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-gray-300 hover:text-white transition">
            Log In
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-2 rounded-full transition">
            Sign Up
          </button>
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
