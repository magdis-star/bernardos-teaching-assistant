import { Content, Lang } from '@/lib/content';
import Image from 'next/image';

interface HeroProps {
  content: Content['hero'];
  lang: Lang;
}

export default function Hero({ content, lang }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-image.jpg"
          alt="Senior couple using tablet for English conversation practice"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Lighter Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/45"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="max-w-3xl text-white py-10">
          {/* Tagline */}
          <p className="text-base sm:text-lg font-medium tracking-wider uppercase text-emerald-300 mb-4">
            AI-Powered English Conversation Practice for Senior Learners
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6"
          >
            {content.headline.split('At Your Own Pace')[0]}
            <span className="text-emerald-300">At Your Own Pace</span>
            {content.headline.split('At Your Own Pace')[1]}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-light mb-8 max-w-lg leading-relaxed">
            {content.subheading}
          </p>

          {/* CTA Subtext */}
          <p className="text-base sm:text-lg font-semibold mb-6 text-emerald-100">
            Join our research study and get free access to your personal AI English tutor
          </p>

          {/* Primary CTA Button */}
          <a
            href="#invitation-form"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl text-base sm:text-lg uppercase tracking-wider shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            aria-label={content.cta}
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
