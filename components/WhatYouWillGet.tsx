import { Content } from '@/lib/content';

interface WhatYouWillGetProps {
  content: Content['whatYouWillGet'];
}

export default function WhatYouWillGet({ content }: WhatYouWillGetProps) {
  const icons = ['🎁', '👋', '💬', '🎓'];

  return (
    <section className="py-16 bg-white" aria-labelledby="what-you-will-get-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="what-you-will-get-heading"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center"
        >
          {content.title}
        </h2>
        <ul className="space-y-4 p-6 bg-emerald-50 rounded-xl border-l-4 border-emerald-500 shadow-lg">
          {content.benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl text-emerald-600">{icons[index]}</span>
              <p className="text-xl font-semibold text-gray-800">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
