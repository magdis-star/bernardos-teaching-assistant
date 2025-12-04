'use client';

import { Content, Lang } from '@/lib/content';
import { useState, FormEvent } from 'react';

interface InvitationFormProps {
  content: Content['form'];
  lang: Lang;
}

export default function InvitationForm({ content }: InvitationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      age: formData.get('age'),
      location: formData.get('location'),
    };

    try {
      // TODO: Replace with actual form submission endpoint when available
      // For now, we'll simulate a successful submission
      console.log('Form data:', data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="invitation-form"
      className="py-16 bg-gray-900"
      aria-labelledby="invitation-form-heading"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl">
          <h2
            id="invitation-form-heading"
            className="text-3xl font-extrabold text-gray-900 mb-8 text-center"
          >
            {content.title}
          </h2>

          {isSuccess && (
            <div
              className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-500 rounded-lg text-center"
              role="alert"
              aria-live="polite"
            >
              <p className="text-base text-gray-800 font-semibold">{content.successMessage}</p>
            </div>
          )}

          {error && (
            <div
              className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-center"
              role="alert"
              aria-live="assertive"
            >
              <p className="text-base text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {content.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {content.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base"
                aria-required="true"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                {content.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base"
                aria-required="true"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700"
                >
                  {content.ageLabel}
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="55"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base"
                  aria-required="true"
                  placeholder="55+"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  {content.locationLabel}
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500 text-base"
                  aria-required="true"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold py-3 rounded-xl text-lg uppercase tracking-wider shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 disabled:cursor-not-allowed"
                aria-label={content.submitButton}
              >
                {isSubmitting ? '...' : content.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
