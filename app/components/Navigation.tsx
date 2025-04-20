'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Import useState

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Blog', path: '/blog'},
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-cyan-400 font-bold text-xl">
            Skidi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${ 
                  pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 text-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'} {/* Simple text icons */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0f172a] border-t border-cyan-500/20 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={toggleMobileMenu} // Close menu on link click
                className={`${ 
                  pathname === item.path
                    ? 'bg-cyan-900/50 text-cyan-300'
                    : 'text-gray-300 hover:bg-cyan-800/30 hover:text-cyan-300'
                } block rounded-md px-3 py-2 text-base font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
