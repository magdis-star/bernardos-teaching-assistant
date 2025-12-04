import Link from 'next/link';
import { Lang, getContent } from '@/lib/content';

interface LanguageSwitcherProps {
  currentLang: Lang;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const content = getContent(currentLang);
  const targetLang: Lang = currentLang === 'en' ? 'es' : 'en';

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md" aria-label="Language navigation">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">B</div>
            <span className="text-xl font-semibold text-gray-800">Bernardo&apos;s Teaching Assistant</span>
          </div>
          <Link
            href={`/${targetLang}`}
            className="text-gray-500 hover:text-emerald-600 transition-colors font-medium"
            aria-label={`Switch to ${targetLang === 'en' ? 'English' : 'Spanish'}`}
          >
            {content.nav.languageSwitch}
          </Link>
        </div>
      </div>
    </nav>
  );
}
