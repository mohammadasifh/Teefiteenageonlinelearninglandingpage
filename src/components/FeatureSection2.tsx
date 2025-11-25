export function FeatureSection2() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl mb-6">
            Our courses are designed by experts to prepare your kids{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              financial success
            </span>
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Every course in our curriculum has been carefully crafted by financial education experts 
            and educators who understand how teenagers learn best. We combine real-world examples 
            with interactive lessons to make complex financial concepts easy to understand.
          </p>
          <p className="text-gray-600 mb-8 text-lg">
            From basic budgeting to understanding credit scores, our comprehensive program covers 
            everything your teen needs to know to build a strong financial foundation.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">Expert-designed curriculum tailored for teenagers</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">Interactive lessons with real-world applications</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white text-sm">✓</span>
              </div>
              <p className="text-gray-700">Progress tracking and personalized feedback</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition">
            Explore Courses
          </button>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-2xl flex items-center justify-center">
            <svg className="w-80 h-80" viewBox="0 0 200 200" fill="none">
              {/* Chart/Graph */}
              <rect x="40" y="50" width="120" height="100" rx="4" fill="white" stroke="#e5e7eb" strokeWidth="2" />
              
              {/* Bar chart */}
              <rect x="55" y="110" width="15" height="30" fill="#60a5fa" opacity="0.8" />
              <rect x="80" y="95" width="15" height="45" fill="#34d399" opacity="0.8" />
              <rect x="105" y="85" width="15" height="55" fill="#fbbf24" opacity="0.8" />
              <rect x="130" y="70" width="15" height="70" fill="#ff0099" opacity="0.8" />
              
              {/* Person analyzing */}
              <circle cx="150" cy="160" r="18" fill="#9333ea" opacity="0.9" />
              <rect x="132" y="178" width="36" height="15" rx="3" fill="#9333ea" opacity="0.9" />
              
              {/* Magnifying glass */}
              <circle cx="90" cy="65" r="8" stroke="#ff0099" strokeWidth="3" fill="none" />
              <path d="M96 71 L105 80" stroke="#ff0099" strokeWidth="3" />
              
              {/* Decorative elements */}
              <circle cx="30" cy="30" r="6" fill="#fbbf24" opacity="0.5" />
              <circle cx="170" cy="40" r="8" fill="#34d399" opacity="0.5" />
              <circle cx="180" cy="170" r="5" fill="#60a5fa" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
