'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface IdeaFormData {
  name: string;
  lga: string;
  question_suggestion: string;
}

const LGAs = [
  'Asa', 'Baruten', 'Edunabon', 'Ekiti', 'Ifelodun', 'Ilorin East',
  'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Iyaji', 'Kabba/Bunu',
  'Kaiama', 'Koro', 'Kwara South', 'Maiyegun', 'Mopa-Muro', 'Oyun', 'Patigi',
  'Remo', 'Yagba East', 'Yagba West'
];

export default function IdeaForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IdeaFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: IdeaFormData) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/ideas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your idea/question has been received.');
        reset();
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setErrorMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6">
      {/* Name (Optional) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name (Optional)
        </label>
        <input
          type="text"
          {...register('name')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Enter your name (or leave blank to submit anonymously)"
        />
      </div>

      {/* LGA */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          LGA *
        </label>
        <select
          {...register('lga', { required: 'LGA is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Select your LGA</option>
          {LGAs.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
        {errors.lga && (
          <p className="text-red-500 text-sm mt-1">{errors.lga.message}</p>
        )}
      </div>

      {/* Question/Suggestion */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Question / Suggestion *
        </label>
        <textarea
          {...register('question_suggestion', { required: 'Question/suggestion is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 h-40"
          placeholder="What should the next Governor of Kwara focus on in your area?"
        ></textarea>
        {errors.question_suggestion && (
          <p className="text-red-500 text-sm mt-1">{errors.question_suggestion.message}</p>
        )}
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
