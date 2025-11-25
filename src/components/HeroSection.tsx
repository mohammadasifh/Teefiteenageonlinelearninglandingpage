import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/70ee0f893ef5e9460a03f5cb6f9bbedddb439f84.png';

export function HeroSection() {
  return (
    <section className="bg-[#1a1a3e] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl mb-6">
            Learn to master{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              financial education
            </span>
            <br />
            in 11 online{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              lessons
            </span>
            <br />
            with our tutors
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Learning to manage your money today builds a lifetime of confidence and stability. 
            Start your journey to financial independence with expert guidance tailored for teens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-8 py-3 rounded-full transition">
              Get Started
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-[#1a1a3e] px-8 py-3 rounded-full transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="relative">
            {/* Main illustration placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-2xl flex items-center justify-center p-8">
              <ImageWithFallback
                src={heroImage}
                alt="Student learning online with video tutorial"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-purple-600 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}