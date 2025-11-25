import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';

const tutors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5.0,
    reviews: 245,
    price: 25,
    image: 'https://images.unsplash.com/photo-1580894732930-0babd100d356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0dXRvciUyMHdvbWFufGVufDF8fHx8MTc2NDA2NTMwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Financial Planning'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 4.9,
    reviews: 189,
    price: 30,
    image: 'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0dXRvciUyMG1hbiUyMGRlc2t8ZW58MXx8fHwxNzY0MDY1MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Investment Basics'
  },
  {
    id: 3,
    name: 'Emily Davis',
    rating: 5.0,
    reviews: 312,
    price: 28,
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFzaWFufGVufDF8fHx8MTc2NDA0MjkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Budget Management'
  },
  {
    id: 4,
    name: 'Alex Martinez',
    rating: 4.8,
    reviews: 156,
    price: 27,
    image: 'https://images.unsplash.com/photo-1687462970787-61d953508926?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwc3R1ZGVudCUyMHdvbWFufGVufDF8fHx8MTc2NDA2NTMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    specialty: 'Saving Strategies'
  }
];

export function TutorSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tutors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tutors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tutors.length) % tutors.length);
  };

  const getVisibleTutors = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(tutors[(currentIndex + i) % tutors.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl lg:text-5xl mb-12">
          Choose your own{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            tutor
          </span>
        </h2>

        <div className="relative px-16">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getVisibleTutors().map((tutor) => (
                <div key={tutor.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 border border-gray-100">
                  <div className="aspect-square mb-4 rounded-xl overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <h3 className="mb-2">{tutor.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{tutor.specialty}</p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(tutor.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {tutor.rating} ({tutor.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl">
                      ${tutor.price}
                      <span className="text-sm text-gray-600">/hr</span>
                    </span>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm transition">
                      Book
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {tutors.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 w-8'
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full transition">
            View All Tutors
          </button>
        </div>
      </div>
    </section>
  );
}