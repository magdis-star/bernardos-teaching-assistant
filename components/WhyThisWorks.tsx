import { Content } from '@/lib/content';

interface WhyThisWorksProps {
  content: Content['whyThisWorks'];
}

export default function WhyThisWorks({ content }: WhyThisWorksProps) {
  return (
    <section className="py-12 bg-sage/5" aria-labelledby="why-this-works-heading">
      <div className="container-custom">
        <h2
          id="why-this-works-heading"
          className="text-2xl md:text-3xl font-bold text-navy text-center mb-10"
        >
          {content.title}
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4">
          {content.benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-base text-navy/90"
            >
              <svg
                className="w-6 h-6 text-sage flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
