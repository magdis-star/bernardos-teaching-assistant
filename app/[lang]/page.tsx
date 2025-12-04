import { Lang, getContent } from '@/lib/content';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import DetailsSection from '@/components/DetailsSection';
import WhatYouWillGet from '@/components/WhatYouWillGet';
import InvitationForm from '@/components/InvitationForm';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params as { lang: Lang };
  const content = getContent(lang);

  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <Hero content={content.hero} lang={lang} />
        <HowItWorks content={content.howItWorks} />
        <DetailsSection
          whyThisWorks={content.whyThisWorks}
          whoWeAreLookingFor={content.whoWeAreLookingFor}
        />
        <WhatYouWillGet content={content.whatYouWillGet} />
        <InvitationForm content={content.form} lang={lang} />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          &copy; 2025 Bernardo&apos;s Teaching Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
