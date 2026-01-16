import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A5C7A] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="mb-4">ʻOno Seafood</h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Serving Hawaiʻi's freshest poke since 1995. A family-owned tradition of quality and aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-white/80 hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#menu" className="block text-white/80 hover:text-white transition-colors">
                Menu
              </a>
              <a href="#locations" className="block text-white/80 hover:text-white transition-colors">
                Locations
              </a>
              <a href="#faq" className="block text-white/80 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4">Kapahulu</h4>
            <div className="text-sm text-white/80 space-y-1">
              <p>747 Kapahulu Ave</p>
              <p>Honolulu, HI 96816</p>
              <a href="tel:+18087328806" className="hover:text-white transition-colors">
                (808) 732-8806
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Kalama Valley</h4>
            <div className="text-sm text-white/80 space-y-1">
              <p>501 Kealahou St</p>
              <p>Honolulu, HI 96825</p>
              <a href="tel:+18083951988" className="hover:text-white transition-colors">
                (808) 395-1988
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center text-sm text-white/80">
            <p className="mb-2">
              <span className="font-semibold text-white">Hours:</span> Tuesday - Saturday
            </p>
            <p>
              Kapahulu: 9:00 AM - 6:00 PM • Kalama Valley: 10:00 AM - 5:00 PM
            </p>
            <p className="mt-2 text-[#D32F2F] font-semibold">
              Closed Sundays & Mondays
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-white/80 mb-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-[#D32F2F] text-[#D32F2F]" />
            <span>in Hawaiʻi</span>
          </div>
          <p className="text-sm text-white/60">
            © {currentYear} ʻOno Seafood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
