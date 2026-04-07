'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface VolunteerFormData {
  full_name: string;
  lga: string;
  phone_number: string;
  email_address: string;
  support_type: string;
}

const LGAs = [
  'Asa', 'Baruten', 'Edunabon', 'Ekiti', 'Ifelodun', 'Ilorin East',
  'Ilorin South', 'Ilorin West', 'Irepodun', 'Isin', 'Iyaji', 'Kabba/Bunu',
  'Kaiama', 'Koro', 'Kwara South', 'Maiyegun', 'Mopa-Muro', 'Oyun', 'Patigi',
  'Remo', 'Yagba East', 'Yagba West'
];

const SupportTypes = [
  'Volunteer',
  'Mobilization',
  'Professional Support',
  'Media/Content',
  'Other'
];

export default function VolunteerForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<VolunteerFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: VolunteerFormData) => {
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/volunteers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Thank you! Your volunteer submission has been received.');
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
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          {...register('full_name', { required: 'Full name is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Enter your full name"
        />
        {errors.full_name && (
          <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
        )}
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

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          {...register('phone_number', { required: 'Phone number is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Enter your phone number"
        />
        {errors.phone_number && (
          <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          {...register('email_address', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
          })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
          placeholder="Enter your email address"
        />
        {errors.email_address && (
          <p className="text-red-500 text-sm mt-1">{errors.email_address.message}</p>
        )}
      </div>

      {/* Support Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          How would you like to support? *
        </label>
        <select
          {...register('support_type', { required: 'Support type is required' })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          <option value="">Select support type</option>
          {SupportTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.support_type && (
          <p className="text-red-500 text-sm mt-1">{errors.support_type.message}</p>
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
