import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactForm = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dataspark',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact',
        formRef.current!,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '' }
      );

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass = "w-full bg-[#f5f4f5] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-gray-700 border-0 focus:ring-2 focus:ring-[#fbb84b]/50 focus:outline-none transition-all duration-200";
  const labelBaseClass = "text-xs sm:text-sm font-medium text-[#191818]";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <Label htmlFor="firstName" className={labelBaseClass}>
            First name
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputBaseClass}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5 sm:gap-2">
          <Label htmlFor="lastName" className={labelBaseClass}>
            Last name
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputBaseClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2">
        <Label htmlFor="email" className={labelBaseClass}>
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputBaseClass}
          required
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2">
        <Label htmlFor="message" className={labelBaseClass}>
          Message <span className="text-red-500">*</span>
        </Label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBaseClass} min-h-[100px] sm:min-h-[120px] resize-none`}
          required
        />
      </div>

      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#3d3b8e] to-[#5c5aae] hover:from-[#4d4b9e] hover:to-[#6c6abe] text-white rounded-lg sm:rounded-xl py-3 sm:py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span className="font-medium text-sm sm:text-base">
          {isSubmitting ? 'Sending...' : 'Submit'}
        </span>
      </Button>

      {submitStatus === 'success' && (
        <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-xs sm:text-sm text-center">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-xs sm:text-sm text-center">
          Something went wrong. Please try again or email us directly at federico@datasparkgrowth.com
        </div>
      )}
    </form>
  );
};
