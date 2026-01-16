import { Fish, Heart, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-[#0A5C7A]">Our Story</h2>
          <div className="w-24 h-1 bg-[#D32F2F] mx-auto"></div>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1767796778102-d1ef47db498c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBhaGklMjB0dW5hJTIwY3ViZXN8ZW58MXx8fHwxNzY4NTMxMDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fresh Ahi Tuna"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl mb-4 text-[#0A5C7A]">Three Decades of Flavor</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Founded in 1995 by Judy Sakuma and her daughter Kim Brug, ʻOno Seafood began as a simple family endeavor—Mom and Pop needed some extra income. What started as home recipes shared with the community has grown into a culinary institution.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our flagship location at 747 Kapahulu Avenue may look like a humble "hole in the wall," but that's exactly the point. We invest in what matters: the freshest fish you'll find anywhere in Honolulu. As Judy says, <span className="italic">"What's good for me is good for you."</span>
            </p>
            <p className="text-gray-700 leading-relaxed">
              After being named <span className="font-semibold text-[#D32F2F]">#1 Restaurant in the US by Yelp</span>, we could have changed everything. Instead, we stayed true to our roots—serving the same quality poke that locals have trusted for nearly 30 years.
            </p>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-b from-[#F5F5F5] to-white rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A5C7A] rounded-full mb-4">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-3 text-[#0A5C7A]">Fresh, Never Frozen</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use auction-grade, fresh pelagic fish—never the frozen, gas-treated cubes you'll find elsewhere. Taste the difference.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-[#F5F5F5] to-white rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A5C7A] rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-3 text-[#0A5C7A]">Family Recipes</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every flavor profile comes from Judy's kitchen. These are the same recipes she's been perfecting for decades.
            </p>
          </div>

          <div className="text-center p-6 bg-gradient-to-b from-[#F5F5F5] to-white rounded-lg">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A5C7A] rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="mb-3 text-[#0A5C7A]">Local Legacy</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We're not a chain. We're a family business serving our community, from kama'āina to visitors seeking authentic Hawaiian poke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
