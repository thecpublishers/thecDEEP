import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from './Button';
import { FormField } from './FormField';
import { Icon } from './Icon';
import { services } from '../content/services';
import { site } from '../content/site';
import { isPhoneLike, isValidEmail } from '../lib/forms';

type ContactValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;

const initialValues: ContactValues = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

const labels: Record<keyof ContactValues, string> = {
  name: 'Full name',
  email: 'Email address',
  phone: 'Phone number',
  interest: 'What can we help with?',
  message: 'Your message',
};

type ContactFormProps = {
  initialService?: string;
};

export function ContactForm({ initialService = '' }: ContactFormProps) {
  const [values, setValues] = useState<ContactValues>({
    ...initialValues,
    interest: initialService,
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const summaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!initialService) return;
    setValues((current) => ({ ...current, interest: initialService }));
  }, [initialService]);

  const setField = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmissionStatus('idle');
  };

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (!values.name.trim()) next.name = 'Please enter your full name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!isValidEmail(values.email))
      next.email = 'Enter a valid email address, for example name@example.com.';
    if (values.phone.trim() && !isPhoneLike(values.phone))
      next.phone = 'Enter a valid phone number, or leave this field blank.';
    if (!values.interest) next.interest = 'Please choose the area your enquiry relates to.';
    if (!values.message.trim()) next.message = 'Please tell us a little about your project or question.';
    else if (values.message.trim().length < 20)
      next.message = 'Please add a little more detail (at least 20 characters).';
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSubmissionStatus('idle');
      window.setTimeout(() => summaryRef.current?.focus(), 40);
      return;
    }
    setSubmissionStatus('sending');
    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || result.error || 'Submission failed');
      setSubmissionStatus('success');
      window.setTimeout(() => document.getElementById('contact-form-status')?.focus(), 40);
    } catch {
      setSubmissionStatus('error');
    }
  };

  const errorEntries = (Object.keys(labels) as Array<keyof ContactValues>)
    .filter((field) => errors[field])
    .map((field) => ({ field, label: labels[field], message: errors[field] }));

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="access_key" value="22bd74db-292b-4090-8ea4-020f07c04f75" />
        <input type="hidden" name="subject" value={"Website enquiry: " + values.interest + " — " + values.name} />
        <input type="hidden" name="from_name" value="Thec Writers & Publishers Website" />
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" style={{ display: "none" }} />
        {attempted && errorEntries.length > 0 ? (
          <div className="form-summary" role="alert" tabIndex={-1} ref={summaryRef}>
            <h3>Please check the form</h3>
            <p>There are {errorEntries.length} fields that need your attention.</p>
            <ul>
              {errorEntries.map((entry) => (
                <li key={entry.field}>
                  <a href={`#contact-${entry.field}`}>
                    {entry.label}: {entry.message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="form-grid">
          <FormField id="contact-name" label="Full name" required error={errors.name}>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={values.name}
              onChange={(event) => setField('name', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
          </FormField>

          <FormField id="contact-email" label="Email address" required error={errors.email}>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => setField('email', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
          </FormField>

          <FormField
            id="contact-phone"
            label="Phone number"
            error={errors.phone}
            hint="Optional, but helpful if you would prefer a call."
          >
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => setField('phone', event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'contact-phone-error' : 'contact-phone-hint'}
            />
          </FormField>

          <FormField
            id="contact-interest"
            label="What can we help with?"
            required
            error={errors.interest}
          >
            <select
              id="contact-interest"
              name="interest"
              required
              value={values.interest}
              onChange={(event) => setField('interest', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.interest)}
              aria-describedby={errors.interest ? 'contact-interest-error' : undefined}
            >
              <option value="">Select an enquiry type</option>
              {services.map((service) => (
                <option value={service.title} key={service.slug}>
                  {service.title}
                </option>
              ))}
              <option value="Published books">Published books / orders</option>
              <option value="Publishing consultation">General publishing consultation</option>
              <option value="Careers">Careers and recruitment</option>
              <option value="Referral programme">Referral programme</option>
              <option value="Other">Something else</option>
            </select>
          </FormField>

          <FormField
            id="contact-message"
            label="Your message"
            required
            error={errors.message}
            className="form-field--full"
            hint="Tell us about your manuscript, idea, or question. Include the stage you have reached if relevant."
          >
            <textarea
              id="contact-message"
              name="message"
              rows={7}
              required
              value={values.message}
              onChange={(event) => setField('message', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? 'contact-message-error' : 'contact-message-hint'
              }
            />
          </FormField>
        </div>

        <div className="contact-form__footer">
          <div className="application-form__note">
            <Icon name="mail" size={18} />
            <p>
              Your enquiry will be submitted directly to Thec. You do not need to open your email app.
            </p>
          </div>
          <Button type="submit" icon="arrow-right" disabled={submissionStatus === 'sending'}>
            {submissionStatus === 'sending' ? 'Submitting…' : 'Submit enquiry'}
          </Button>
        </div>
      </form>

      {submissionStatus === 'success' ? (
        <div className="form-confirmation" id="contact-form-status" role="status" tabIndex={-1} aria-live="polite">
          <span className="form-confirmation__icon"><Icon name="check" size={24} /></span>
          <div>
            <h3>Your enquiry has been submitted successfully.</h3>
            <p>Thank you for contacting Thec Writers &amp; Publishers. Your message has been sent to <a href={'mailto:' + site.contact.email}>{site.contact.email}</a>. Our team will review it and respond as soon as possible.</p>
            <p className="form-confirmation__fallback">Need a quicker conversation? <a href={site.contact.whatsapp} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>.</p>
          </div>
        </div>
      ) : null}
      {submissionStatus === 'error' ? (
        <div className="form-summary" role="alert">
          <h3>We could not submit your enquiry.</h3>
          <p>Please check your connection and try again. You can also email <a href={'mailto:' + site.contact.email}>{site.contact.email}</a> directly or contact us on WhatsApp.</p>
        </div>
      ) : null}
    </div>
  );
}
