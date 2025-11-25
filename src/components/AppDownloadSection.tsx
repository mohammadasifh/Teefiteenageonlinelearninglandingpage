import { Apple } from 'lucide-react';

export function AppDownloadSection() {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-yellow-500 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - App mockup */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div className="w-64 h-[500px] bg-[#1a1a3e] rounded-[3rem] border-8 border-gray-800 shadow-2xl p-4">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 rounded-[2rem] flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-sm">TeeFi Mobile App</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 w-32 h-24 bg-white rounded-xl shadow-lg p-3">
                <div className="text-xs text-gray-600">Daily Savings</div>
                <div className="text-2xl mt-2">$127</div>
              </div>
              
              <div className="absolute -right-8 bottom-32 w-32 h-24 bg-white rounded-xl shadow-lg p-3">
                <div className="text-xs text-gray-600">Goal Progress</div>
                <div className="text-2xl mt-2">85%</div>
              </div>
            </div>
          </div>

          {/* Right - Download buttons */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl lg:text-4xl mb-4">
              Download our app and start learning on the go
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play */}
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-xl flex items-center gap-3 transition shadow-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm2.96-1.67c.38-.22.63-.63.63-1.09s-.25-.87-.63-1.09l-2.15-1.21-2.51 2.51 2.51 2.51 2.15-1.21zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">GET IT ON</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>

              {/* App Store */}
              <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-xl flex items-center gap-3 transition shadow-lg">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
