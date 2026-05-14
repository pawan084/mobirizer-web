'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Input, Textarea, Select, Button } from '@/components';
import { motion } from '@/components/ui';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500));

    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
    router.push('/contact/success');
  }

  return (
    <motion.form
      className="contact-form"
      id="contactForm"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="form-grid">
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Input
            id="name"
            name="name"
            label="Full Name"
            placeholder="Enter your name"
            required
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <Input
            type="email"
            id="email"
            name="email"
            label="Email Address"
            placeholder="Enter your email"
            required
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Input
            type="tel"
            id="phone"
            name="phone"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <Input
            id="company"
            name="company"
            label="Company Name"
            placeholder="Enter your company name"
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Select
            id="subject"
            name="subject"
            label="Subject"
            placeholder="Select a subject"
            required
            options={[
              { value: 'general', label: 'General Inquiry' },
              { value: 'project', label: 'Start a Project' },
              { value: 'solutions', label: 'Solutions Information' },
              { value: 'partnership', label: 'Partnership Opportunity' },
              { value: 'support', label: 'Technical Support' },
            ]}
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <Textarea
            id="message"
            name="message"
            label="Message"
            rows={5}
            placeholder="Tell us about your project or question..."
            required
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" variant="cta" size="lg" disabled={isSubmitting} className="w-full">
              <i className="ri-send-plane-line" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.form>
  );
}
