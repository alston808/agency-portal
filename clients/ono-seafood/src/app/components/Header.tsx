import { MapPin, Clock, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group"
          >
            <div className="text-[#0A5C7A] text-2xl font-bold">
              ʻONO SEAFOOD
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#D32F2F] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-[#D32F2F] transition-colors">
              Menu
            </button>
            <button onClick={() => scrollToSection('locations')} className="hover:text-[#D32F2F] transition-colors">
              Locations
            </button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-[#D32F2F] transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[#D32F2F] transition-colors">
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-[#D32F2F] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('menu')} className="text-left py-2 hover:text-[#D32F2F] transition-colors">
                Menu
              </button>
              <button onClick={() => scrollToSection('locations')} className="text-left py-2 hover:text-[#D32F2F] transition-colors">
                Locations
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-[#D32F2F] transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 hover:text-[#D32F2F] transition-colors">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
