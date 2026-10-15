import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import logo from '../../assets/logo.jpeg';

export default function Navbar({ activeTab, setActiveTab, onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'salvation', label: 'New Here?' },
    { id: 'membership', label: 'Membership' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 text-white shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo & Brand Name */}
          <button
            type="button"
            className="flex shrink-0 items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
            aria-label="True Light Church home"
          >
            <img
              src={logo}
              alt="True Light Church"
              className="h-16 sm:h-20 w-auto max-w-[180px] object-contain"
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? 'bg-tlc-gold text-tlc-dark font-bold shadow-sm' 
                    : 'text-white hover:bg-white/10 hover:text-tlc-gold'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={onOpenModal}
              className="ml-3 bg-tlc-gold text-tlc-dark font-bold px-4 py-2 rounded-full hover:bg-yellow-400 transition-all flex items-center space-x-2 shadow-md transform hover:scale-105"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Connect</span>
            </button>
          </div>

          {/* Mobile Menu Hammer Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-tlc-gold hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-tlc-blue border-b border-tlc-gold/30 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-tlc-gold text-tlc-dark font-bold' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => { onOpenModal(); setMobileMenuOpen(false); }}
              className="w-full bg-tlc-gold text-tlc-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <Heart className="w-5 h-5 fill-current" />
              <span>Connect / Request Prayer</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}