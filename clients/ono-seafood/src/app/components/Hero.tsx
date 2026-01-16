import { Clock, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get current day to show proper open/closed status
  const getCurrentStatus = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();

    // Closed on Sunday (0) and Monday (1)
    if (day === 0 || day === 1) {
      return { kapahulu: "CLOSED", kalama: "CLOSED", isOpen: false };
    }

    // Check hours for Kapahulu (9am-6pm)
    const kapahuluOpen = hour >= 9 && hour < 18;
    
    // Check hours for Kalama Valley (10am-5pm)
    const kalamaOpen = hour >= 10 && hour < 17;

    return {
      kapahulu: kapahuluOpen ? `OPEN until 6pm` : "CLOSED",
      kalama: kalamaOpen ? `OPEN until 5pm` : "CLOSED",
      isOpen: kapahuluOpen || kalamaOpen
    };
  };

  const status = getCurrentStatus();

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#0A5C7A] to-[#0D7FA3]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1768326119231-bf064c1b8fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHR1bmElMjBwb2tlJTIwYm93bHxlbnwxfHx8fDE3Njg1MzEwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#0A5C7A]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-[#D32F2F] text-white rounded-full mb-4">
            Hawaiʻi's #1 Rated Poke
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4">
            Fresh. Never Frozen.
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Serving Honolulu's favorite Ahi and Tako poke since 1995
          </p>
        </div>

        {/* Status Bar */}
        <div className="bg-white/95 backdrop-blur rounded-lg shadow-lg p-4 sm:p-6 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-[#0A5C7A]" />
            <span className="font-semibold text-gray-900">Today's Hours</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded p-3">
              <div className="font-semibold text-sm text-gray-600 mb-1">Kapahulu</div>
              <div className={`text-lg ${status.kapahulu.includes('OPEN') ? 'text-green-600' : 'text-red-600'}`}>
                {status.kapahulu}
              </div>
            </div>
            <div className="bg-gray-50 rounded p-3">
              <div className="font-semibold text-sm text-gray-600 mb-1">Kalama Valley</div>
              <div className={`text-lg ${status.kalama.includes('OPEN') ? 'text-green-600' : 'text-red-600'}`}>
                {status.kalama}
              </div>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Closed Sundays & Mondays • May close early if sold out
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToMenu}
          className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-lg transition-colors shadow-lg"
        >
          View Menu
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
}
