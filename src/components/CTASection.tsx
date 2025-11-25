import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="flex justify-center">
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667179873742-915e940a31f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlZW5hZ2UlMjBzdHVkZW50fGVufDF8fHx8MTc2NDA2NTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Happy student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="text-white">
          <h2 className="text-4xl lg:text-5xl mb-6">
            Choose from hundreds of experienced tutors and prepare your kids{' '}
            <span className="text-yellow-300">financial success</span>
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of families who are giving their teens the gift of financial literacy. 
            Our expert tutors are ready to help your child build a strong financial foundation.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-10 py-4 rounded-full transition text-lg shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
