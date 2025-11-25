import { Apple, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a3e] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">T</span>
              </div>
              <span className="font-bold text-2xl">TeeFi</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering the next generation with financial knowledge and confidence.
            </p>
            
            {/* App Download Buttons */}
            <div className="flex flex-col gap-3">
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold text-xs">App Store</div>
                </div>
              </button>
              
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg flex items-center gap-2 transition text-sm">
                <div className="w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm2.96-1.67c.38-.22.63-.63.63-1.09s-.25-.87-.63-1.09l-2.15-1.21-2.51 2.51 2.51 2.51 2.15-1.21zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-semibold text-xs">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Our Tutors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>

          {/* Our Plan */}
          <div>
            <h4 className="mb-4">Our Plan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Starter Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Standard Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Complete Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Custom Plan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Free Trial</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 TeeFi. All rights reserved.
          </p>
          
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
