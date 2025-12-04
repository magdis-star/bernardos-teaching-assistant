import { Content } from '@/lib/content';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section className="py-16 bg-white" aria-labelledby="how-it-works-heading">
      <div className="container-custom">
        <h2
          id="how-it-works-heading"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 text-center"
        >
          {content.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-xl shadow-lg transition duration-300 hover:shadow-xl border-t-4 border-emerald-500"
            >
              <div className="w-12 h-12 mx-auto bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
