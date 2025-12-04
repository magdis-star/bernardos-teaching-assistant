import Link from 'next/link';
import Image from 'next/image';
import { Lang, getContent } from '@/lib/content';

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const content = getContent(currentLang);
  const targetLang: Lang = currentLang === 'en' ? 'es' : 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" aria-label="Language navigation">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/logo-nav.png"
              alt="Bernardo's Teaching Assistant"
              width={200}
              height={75}
              priority
              className="h-16 w-auto"
            />
          </div>
          <Link
            href={`/${targetLang}`}
            className="text-gray-500 hover:text-emerald-300 transition-colors font-medium"
            aria-label={`Switch to ${targetLang === 'en' ? 'English' : 'Spanish'}`}
          >
            {content.nav.languageSwitch}
          </Link>
        </div>
      </div>
    </nav>
  );
}
