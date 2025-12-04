import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Lang } from '@/lib/content';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bernardo\'s Teaching Assistant - English Conversation Practice for Seniors',
  description: 'AI-powered English conversation tutor for learners aged 55+. Practice naturally adaptive dialogues at your own pace.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params as { lang: Lang };

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <LanguageSwitcher currentLang={lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
