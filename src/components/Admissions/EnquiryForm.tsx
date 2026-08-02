import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

// ─── Zod Schema ─────────────────────────────────────────
const enquirySchema = z.object({
  parentName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .regex(/^[+]?[\d\s-]{10,15}$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  childAge: z.string().min(1, 'Please select your child\'s age'),
  gradeApplyingFor: z.string().min(1, 'Please select a grade'),
  message: z.string().max(500, 'Message is too long').optional(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

// ─── Form Component ─────────────────────────────────────
export default function EnquiryForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      parentName: '',
      phone: '',
      email: '',
      childAge: '',
      gradeApplyingFor: '',
      message: '',
    },
  });

  const onSubmit = (data: EnquiryFormData) => {
    startTransition(async () => {
      try {
        // ──────────────────────────────────────────────────
        // [EDIT ME] Connect to your backend here:
        // Options:
        //   1. Send to a REST API endpoint
        //   2. Send to Google Sheets via Apps Script
        //   3. Send email via EmailJS, Resend, or similar
        //   4. Post to a CRM webhook (HubSpot, Zoho, etc.)
        //
        // Example:
        //   const response = await fetch('/api/enquiry', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data),
        //   });
        //   if (!response.ok) throw new Error('Failed to submit');
        // ──────────────────────────────────────────────────

        // Simulate API call
        console.log('Enquiry form submitted:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setSubmitStatus('success');
        reset();

        // Reset success state after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }
    });
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-xl border border-warm-300 
    bg-warm-50 text-warm-800 
    focus:border-primary-400 focus:ring-2 focus:ring-primary-200 focus:outline-none
    transition-all duration-200 text-sm
    placeholder:text-warm-400
  `;

  const errorClasses = 'text-accent-500 text-xs mt-1 flex items-center gap-1';

  return (
    <div>
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10 }}
            >
              <CheckCircle
                size={64}
                className="text-green-500 mx-auto mb-4"
              />
            </motion.div>
            <h4 className="text-xl font-bold text-secondary-700 font-heading mb-2">
              Thank You!
            </h4>
            <p className="text-warm-500">
              We've received your enquiry. Our admissions team will contact you
              within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Parent Name */}
            <div>
              <label
                htmlFor="parentName"
                className="block text-sm font-medium text-warm-700 mb-1.5"
              >
                Parent/Guardian Name <span className="text-accent-400">*</span>
              </label>
              <input
                id="parentName"
                type="text"
                placeholder="e.g. Priya Sharma"
                className={inputClasses}
                {...register('parentName')}
              />
              {errors.parentName && (
                <p className={errorClasses}>
                  <AlertCircle size={12} />
                  {errors.parentName.message}
                </p>
              )}
            </div>

            {/* Phone & Email Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-warm-700 mb-1.5"
                >
                  Phone Number <span className="text-accent-400">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputClasses}
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className={errorClasses}>
                    <AlertCircle size={12} />
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-warm-700 mb-1.5"
                >
                  Email Address <span className="text-accent-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="parent@email.com"
                  className={inputClasses}
                  {...register('email')}
                />
                {errors.email && (
                  <p className={errorClasses}>
                    <AlertCircle size={12} />
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Child Age & Grade Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="childAge"
                  className="block text-sm font-medium text-warm-700 mb-1.5"
                >
                  Child's Age <span className="text-accent-400">*</span>
                </label>
                <select
                  id="childAge"
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  {...register('childAge')}
                >
                  <option value="">Select age</option>
                  <option value="3">3 years</option>
                  <option value="4">4 years</option>
                  <option value="5">5 years</option>
                  <option value="6">6 years</option>
                  <option value="7">7 years</option>
                  <option value="8">8 years</option>
                  <option value="9">9 years</option>
                  <option value="10">10 years</option>
                  <option value="11">11 years</option>
                </select>
                {errors.childAge && (
                  <p className={errorClasses}>
                    <AlertCircle size={12} />
                    {errors.childAge.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="gradeApplyingFor"
                  className="block text-sm font-medium text-warm-700 mb-1.5"
                >
                  Grade Applying For <span className="text-accent-400">*</span>
                </label>
                <select
                  id="gradeApplyingFor"
                  className={`${inputClasses} appearance-none cursor-pointer`}
                  {...register('gradeApplyingFor')}
                >
                  <option value="">Select grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="grade-1">Grade 1</option>
                  <option value="grade-2">Grade 2</option>
                  <option value="grade-3">Grade 3</option>
                  <option value="grade-4">Grade 4</option>
                  <option value="grade-5">Grade 5</option>
                </select>
                {errors.gradeApplyingFor && (
                  <p className={errorClasses}>
                    <AlertCircle size={12} />
                    {errors.gradeApplyingFor.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-warm-700 mb-1.5"
              >
                Message <span className="text-warm-400">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Any specific questions or requirements..."
                className={`${inputClasses} resize-none`}
                {...register('message')}
              />
              {errors.message && (
                <p className={errorClasses}>
                  <AlertCircle size={12} />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Error Banner */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-accent-50 border border-accent-200 rounded-xl text-accent-600 text-sm flex items-center gap-2"
              >
                <AlertCircle size={18} />
                Something went wrong. Please try again or contact us directly.
              </motion.div>
            )}

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg" isLoading={isPending}>
              <Send size={18} />
              Submit Enquiry
            </Button>

            <p className="text-xs text-warm-400 text-center">
              By submitting, you agree to be contacted by our admissions team.
              We respect your privacy.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
