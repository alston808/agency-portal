import { Droplets } from "lucide-react";

interface FlavorItem {
  id: string;
  name: string;
  protein: string;
  description: string;
  profile: string;
  color: string;
}

import { useState, useEffect } from "react";

export function Menu() {
  const [flavors, setFlavors] = useState<FlavorItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setFlavors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch menu:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="menu" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#0A5C7A]">The Great Eight</h2>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            At ʻOno Seafood, we don't overcomplicate it. We start with fresh, premium Ahi—never frozen—and season it with our family recipes. Each bowl comes with hot rice and a complimentary cold drink.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A5C7A]"></div>
          </div>
        ) : (
          /* Flavor Grid */
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {flavors.map((flavor) => (
              <div
                key={flavor.id}
                className={`${flavor.color} border-2 rounded-lg p-5 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-2xl font-bold text-[#0A5C7A]">{flavor.id}</div>
                  <Droplets className="w-5 h-5 text-[#0A5C7A] opacity-50" />
                </div>
                <h3 className="text-xl mb-1 text-gray-900">{flavor.name}</h3>
                <div className="text-sm text-gray-500 mb-3 italic">{flavor.protein}</div>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{flavor.description}</p>
                <div className="text-xs text-[#0A5C7A] font-semibold border-t border-gray-300 pt-3">
                  {flavor.profile}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bowl Options */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h3 className="text-2xl mb-6 text-[#0A5C7A] text-center">Poke Bowl Options</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-xl mb-2 text-[#0A5C7A]">Regular Bowl</div>
              <div className="text-3xl text-[#D32F2F] mb-4">$11.75 - $13.00</div>
              <ul className="space-y-2 text-gray-700">
                <li>• 0.33 - 0.5 lb of fresh poke</li>
                <li>• Hot steamed white or brown rice</li>
                <li>• Free canned drink included</li>
                <li>• Choose one or split between two flavors</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-br from-[#0A5C7A]/5 to-white">
              <div className="text-xl mb-2 text-[#0A5C7A]">Large Bowl</div>
              <div className="text-3xl text-[#D32F2F] mb-4">$13.75 - $16.00</div>
              <ul className="space-y-2 text-gray-700">
                <li>• 0.5 - 0.75 lb of fresh poke</li>
                <li>• Hot steamed white or brown rice</li>
                <li>• Free canned drink included</li>
                <li>• Choose one or split between two flavors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Options */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl mb-3 text-[#0A5C7A]">By The Pound</h4>
            <p className="text-gray-600 mb-3">Perfect for potlucks and family dinners</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Ahi: ~$25/lb</li>
              <li>• Salmon: ~$15/lb</li>
              <li>• Tako: ~$17/lb</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl mb-3 text-[#0A5C7A]">Catering Available</h4>
            <p className="text-gray-600 mb-3">Poke platters and sashimi for your event</p>
            <a 
              href="#contact" 
              className="inline-block text-[#D32F2F] hover:underline font-semibold"
            >
              Contact us for details →
            </a>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          *Prices subject to market fluctuations. We reserve the right to adjust based on fresh fish availability.
        </div>
      </div>
    </section>
  );
}
