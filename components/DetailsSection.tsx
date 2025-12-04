import { Content } from '@/lib/content';

interface DetailsSectionProps {
  whyThisWorks: Content['whyThisWorks'];
  whoWeAreLookingFor: Content['whoWeAreLookingFor'];
}

export default function DetailsSection({ whyThisWorks, whoWeAreLookingFor }: DetailsSectionProps) {
  const icons = {
    whyWorks: ['✅', '👂', '📱', '🧠', '💖'],
    lookingFor: ['🎂', '🗣️', '📱', '📍', '📅']
  };

  return (
    <section className="py-16 bg-gray-50" aria-label="Details">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Why This Works for You */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              {whyThisWorks.title}
            </h2>
            <ul className="space-y-4">
              {whyThisWorks.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-2xl text-emerald-600">{icons.whyWorks[index]}</span>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We're Looking For */}
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              {whoWeAreLookingFor.title}
            </h2>
            <ul className="space-y-4">
              {whoWeAreLookingFor.criteria.map((criterion, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-2xl text-emerald-600">{icons.lookingFor[index]}</span>
                  <p className="text-lg text-gray-700">{criterion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
