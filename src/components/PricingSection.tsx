import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Starter',
    lessons: 5,
    price: 83,
    features: [
      '5 one-on-one lessons',
      'Basic financial concepts',
      'Email support',
      'Course materials included'
    ]
  },
  {
    id: 2,
    name: 'Standard',
    lessons: 8,
    price: 99,
    popular: true,
    features: [
      '8 one-on-one lessons',
      'Intermediate topics',
      'Priority support',
      'Course materials + worksheets',
      'Progress tracking'
    ]
  },
  {
    id: 3,
    name: 'Complete',
    lessons: 11,
    price: 110,
    features: [
      'Complete 11 lesson course',
      'All financial topics covered',
      '24/7 support',
      'All course materials',
      'Personalized learning path',
      'Certificate of completion'
    ]
  }
];

export function PricingSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl lg:text-5xl mb-4">
          Pricing{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            1:1 Plan
          </span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the plan that works best for your learning goals. All plans include access to our expert tutors.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-8 border-2 ${
                plan.popular ? 'border-pink-500 relative' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                  <span className="text-sm">📚</span>
                  <span className="text-sm">{plan.lessons} lessons</span>
                </div>
                <div className="text-5xl mb-2">
                  ${plan.price}
                </div>
                <div className="text-gray-600 text-sm">per month</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full transition ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white'
                    : 'border-2 border-gray-300 hover:border-pink-500 text-gray-700 hover:text-pink-500'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-4 rounded-full transition text-lg shadow-lg">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
