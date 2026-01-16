import { MapPin, Clock, Phone, Car, AlertCircle } from "lucide-react";

export function Locations() {
  return (
    <section id="locations" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#0A5C7A]">Visit Us</h2>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
        </div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Kapahulu Flagship */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#0A5C7A] text-white p-4">
              <h3 className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Kapahulu Flagship
              </h3>
              <div className="text-sm mt-1 opacity-90">The Original • Est. 1995</div>
            </div>
            
            <div className="p-6">
              {/* Address */}
              <div className="mb-6">
                <div className="font-semibold text-gray-900 mb-2">Address</div>
                <p className="text-gray-700">747 Kapahulu Ave</p>
                <p className="text-gray-700">Honolulu, HI 96816</p>
                <a 
                  href="https://maps.google.com/?q=747+Kapahulu+Ave,Honolulu,HI+96816" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#D32F2F] hover:underline font-semibold text-sm"
                >
                  Get Directions →
                </a>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hours
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span className="text-red-600 font-semibold">CLOSED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday - Saturday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-600 font-semibold">CLOSED</span>
                  </div>
                </div>
              </div>

              {/* Parking Warning */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Car className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-amber-900 mb-1">Parking Notice</div>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Limited on-site parking (approx. 5 stalls). If full, street parking is available on Kapahulu Avenue. Please respect our neighbors and do not park in apartment stalls marked "Reserved."
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Pro Tips</div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Best time to visit: 2-4 PM (avoid lunch rush)</li>
                      <li>• Near Taco Bell on Hunter & Kapahulu</li>
                      <li>• Limited outdoor seating available</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+18087328806" className="hover:text-[#D32F2F]">
                    (808) 732-8806
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kalama Valley Location */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="bg-[#0A5C7A] text-white p-4">
              <h3 className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Kalama Valley
              </h3>
              <div className="text-sm mt-1 opacity-90">East Oahu • Beach Convenient</div>
            </div>
            
            <div className="p-6">
              {/* Address */}
              <div className="mb-6">
                <div className="font-semibold text-gray-900 mb-2">Address</div>
                <p className="text-gray-700">501 Kealahou St</p>
                <p className="text-gray-700">Honolulu, HI 96825</p>
                <a 
                  href="https://maps.google.com/?q=501+Kealahou+St,Honolulu,HI+96825" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#D32F2F] hover:underline font-semibold text-sm"
                >
                  Get Directions →
                </a>
              </div>

              {/* Hours */}
              <div className="mb-6">
                <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hours
                </div>
                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span className="text-red-600 font-semibold">CLOSED</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday - Saturday</span>
                    <span className="font-semibold">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-red-600 font-semibold">CLOSED</span>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-2">
                  <Car className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-900 mb-1">Easy Parking</div>
                    <p className="text-sm text-green-800 leading-relaxed">
                      Ample parking available in the shopping center lot. This is your best option if you want to avoid the Kapahulu parking challenge.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-blue-900 mb-1">Perfect For</div>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Beach days at Sandy Beach or Hanauma Bay</li>
                      <li>• East Oahu residents</li>
                      <li>• Easier parking than Kapahulu</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+18083951988" className="hover:text-[#D32F2F]">
                    (808) 395-1988
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-8 bg-[#D32F2F]/10 border border-[#D32F2F]/30 rounded-lg p-6 text-center">
          <div className="font-semibold text-[#D32F2F] mb-2 text-lg">
            We May Close Early If Sold Out
          </div>
          <p className="text-gray-700">
            Our commitment to fresh, never frozen fish means we sometimes sell out before closing. We recommend calling ahead if you're visiting near closing time.
          </p>
        </div>
      </div>
    </section>
  );
}
