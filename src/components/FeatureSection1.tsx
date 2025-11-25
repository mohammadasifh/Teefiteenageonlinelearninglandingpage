import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/70ee0f893ef5e9460a03f5cb6f9bbedddb439f84.png';

export function FeatureSection1() {
  return (
    <section className="bg-[#1a1a3e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Illustration */}
        <div className="relative order-2 lg:order-1">
          <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-2xl flex items-center justify-center p-8">
            <ImageWithFallback
              src={heroImage}
              alt="Online learning illustration"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg">
            <span>💰 Smart Money</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Building a financially{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              smart generation
            </span>
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Our mission is to empower teenagers with the financial knowledge and skills they need 
            to make informed decisions about money. Through engaging lessons and personalized tutoring, 
            we help young people understand budgeting, saving, investing, and planning for their future.
          </p>
          <p className="text-gray-300 mb-8 text-lg">
            With expert tutors and a curriculum designed specifically for teens, we make financial 
            education accessible, practical, and even fun. Start building your financial confidence today.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}