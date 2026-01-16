import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#0A5C7A]">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Questions about catering, bulk orders, or just want to say aloha? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {/* Kapahulu */}
          <div className="bg-gradient-to-br from-[#0A5C7A]/5 to-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#0A5C7A]" />
              <h3 className="text-xl text-[#0A5C7A]">Kapahulu</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+18087328806" className="hover:text-[#D32F2F]">
                  (808) 732-8806
                </a>
              </div>
              <div className="text-sm">
                747 Kapahulu Ave<br />
                Honolulu, HI 96816
              </div>
            </div>
          </div>

          {/* Kalama Valley */}
          <div className="bg-gradient-to-br from-[#0A5C7A]/5 to-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#0A5C7A]" />
              <h3 className="text-xl text-[#0A5C7A]">Kalama Valley</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:+18083951988" className="hover:text-[#D32F2F]">
                  (808) 395-1988
                </a>
              </div>
              <div className="text-sm">
                501 Kealahou St<br />
                Honolulu, HI 96825
              </div>
            </div>
          </div>
        </div>

        {/* Catering Inquiry */}
        <div className="bg-gradient-to-br from-[#D32F2F]/10 to-white border border-[#D32F2F]/30 rounded-lg p-8 text-center">
          <Mail className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
          <h3 className="text-2xl mb-3 text-[#0A5C7A]">Catering & Bulk Orders</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Planning a party, corporate event, or family gathering? We offer poke platters, sashimi trays, and bulk orders. Call either location to discuss your needs and we'll make sure your event is unforgettable.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18087328806"
              className="inline-flex items-center gap-2 bg-[#0A5C7A] hover:bg-[#084A5F] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Kapahulu
            </a>
            <a
              href="tel:+18083951988"
              className="inline-flex items-center gap-2 bg-[#0A5C7A] hover:bg-[#084A5F] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Kalama Valley
            </a>
          </div>
        </div>

        {/* Hours Reminder */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">
            <strong>Both locations:</strong> Closed Sundays & Mondays
          </p>
          <p className="text-sm">
            Tuesday - Saturday • Kapahulu: 9am-6pm • Kalama Valley: 10am-5pm
          </p>
        </div>
      </div>
    </section>
  );
}
