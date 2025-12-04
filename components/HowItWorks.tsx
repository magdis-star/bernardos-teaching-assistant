import { Content } from '@/lib/content';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section className="py-20 bg-white" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="how-it-works-heading"
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            {content.title}
          </h2>
          <div className="h-1 w-20 bg-emerald-300 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.steps.map((step, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl transition duration-300 hover:bg-white hover:shadow-xl border-2 border-gray-200 hover:border-emerald-300"
            >
              <div className="w-14 h-14 mb-6 mx-auto bg-emerald-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md group-hover:bg-emerald-600 group-hover:scale-110 transition-all duration-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
