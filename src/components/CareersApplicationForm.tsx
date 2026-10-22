import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { Button } from './Button';
import { FormField } from './FormField';
import { Icon } from './Icon';
import { experienceOptions, jobs, startOptions } from '../content/careers';
import { site } from '../content/site';
import { buildMailto, isPhoneLike, isValidEmail, isValidUrl } from '../lib/forms';

type ApplicationValues = {
  position: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  qualification: string;
  why: string;
  portfolio: string;
  start: string;
  coverLetter: string;
};

type FieldName = keyof ApplicationValues;
type ApplicationErrors = Partial<Record<FieldName, string>>;

const emptyValues: ApplicationValues = {
  position: '',
  fullName: '',
  email: '',
  phone: '',
  location: '',
  experience: '',
  qualification: '',
  why: '',
  portfolio: '',
  start: '',
  coverLetter: '',
};

const fieldLabels: Record<FieldName, string> = {
  position: 'Position Applied For',
  fullName: 'Full Name',
  email: 'Email Address',
  phone: 'Phone Number',
  location: 'Current Location',
  experience: 'Years of Experience',
  qualification: 'Highest Qualification',
  why: 'Why do you want to work with THEC Publishers?',
  portfolio: 'Portfolio/LinkedIn URL',
  start: 'How soon can you start?',
  coverLetter: 'Additional Information / Cover Letter',
};

const fieldOrder: FieldName[] = [
  'position',
  'fullName',
  'email',
  'phone',
  'location',
  'experience',
  'qualification',
  'why',
  'portfolio',
  'start',
  'coverLetter',
];

type CareersApplicationFormProps = {
  initialPosition: string;
};

export function CareersApplicationForm({ initialPosition }: CareersApplicationFormProps) {
  const [values, setValues] = useState<ApplicationValues>(emptyValues);
  const [errors, setErrors] = useState<ApplicationErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle');
  const summaryRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!initialPosition) return;
    setValues((current) => ({ ...current, position: initialPosition }));
    setErrors((current) => ({ ...current, position: undefined }));
  }, [initialPosition]);

  const setField = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setPreparedMailto(null);
    setCopyState('idle');
  };

  const validate = (): ApplicationErrors => {
    const next: ApplicationErrors = {};
    if (!values.position) next.position = 'Please select the position you are applying for.';
    if (!values.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!values.email.trim()) next.email = 'Please enter your email address.';
    else if (!isValidEmail(values.email)) next.email = 'Enter a valid email address, for example name@example.com.';
    if (!values.phone.trim()) next.phone = 'Please enter a phone number.';
    else if (!isPhoneLike(values.phone)) next.phone = 'Enter a valid phone number with at least 7 digits.';
    if (!values.location.trim()) next.location = 'Please tell us where you are currently based.';
    if (!values.qualification.trim())
      next.qualification = 'Please enter your highest academic or professional qualification.';
    if (!values.why.trim()) next.why = 'Please tell us why you want to join THEC Publishers.';
    else if (values.why.trim().length < 40)
      next.why = 'Please write at least 40 characters so we can understand your motivation.';
    if (values.portfolio.trim() && !isValidUrl(values.portfolio))
      next.portfolio = 'Enter a full URL beginning with https:// (or leave this blank).';
    return next;
  };

  const applicationBody = useMemo(() => {
    return [
      'THEC PUBLISHERS — JOB APPLICATION',
      '',
      `Position applied for: ${values.position || 'Not selected'}`,
      `Full name: ${values.fullName || 'Not provided'}`,
      `Email address: ${values.email || 'Not provided'}`,
      `Phone number: ${values.phone || 'Not provided'}`,
      `Current location: ${values.location || 'Not provided'}`,
      `Years of experience: ${values.experience || 'Not provided'}`,
      `Highest qualification: ${values.qualification || 'Not provided'}`,
      `Portfolio/LinkedIn: ${values.portfolio || 'Not provided'}`,
      `Available to start: ${values.start || 'Not provided'}`,
      '',
      'Why I want to work with THEC Publishers:',
      values.why || 'Not provided',
      '',
      'Additional information / cover letter:',
      values.coverLetter || 'Not provided',
      '',
      '—',
      'Submitted via the Thec Writers & Publishers careers page.',
      'CV or supporting documents must be attached to this email before sending.',
    ].join('\n');
  }, [values]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAttempted(true);
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setPreparedMailto(null);
      window.setTimeout(() => summaryRef.current?.focus(), 40);
      return;
    }

    const mailto = buildMailto({
      to: site.contact.recruitmentEmail,
      subject: `Job application: ${values.position} — ${values.fullName}`,
      body: applicationBody,
    });
    setPreparedMailto(mailto);
    setCopyState('idle');
    window.setTimeout(() => {
      window.location.href = mailto;
      document.getElementById('application-status')?.focus();
    }, 80);
  };

  const copyApplication = async () => {
    const text = `To: ${site.contact.recruitmentEmail}\nSubject: Job application: ${values.position} — ${values.fullName}\n\n${applicationBody}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopyState('copied');
    } catch {
      setCopyState('manual');
      window.setTimeout(() => {
        const textarea = document.getElementById('manual-copy') as HTMLTextAreaElement | null;
        textarea?.focus();
        textarea?.select();
      }, 40);
    }
  };

  const errorEntries = fieldOrder
    .filter((field) => errors[field])
    .map((field) => ({ field, id: field, label: fieldLabels[field], message: errors[field] }));

  return (
    <div className="application-form-wrap">
      <form ref={formRef} className="application-form" onSubmit={handleSubmit} noValidate>
        {attempted && errorEntries.length > 0 ? (
          <div
            className="form-summary"
            role="alert"
            tabIndex={-1}
            ref={summaryRef}
            aria-labelledby="form-summary-heading"
          >
            <h3 id="form-summary-heading">Please check the form</h3>
            <p>There are {errorEntries.length} fields that need your attention.</p>
            <ul>
              {errorEntries.map((entry) => (
                <li key={entry.field}>
                  <a href={`#${entry.id}`}>
                    {entry.label}: {entry.message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="form-grid">
          <FormField
            id="position"
            label="Position Applied For"
            required
            error={errors.position}
            className="form-field--full"
          >
            <select
              id="position"
              name="position"
              required
              value={values.position}
              onChange={(event) => setField('position', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.position)}
              aria-describedby={errors.position ? 'position-error' : undefined}
            >
              <option value="">Select a position</option>
              {jobs.map((job) => (
                <option value={job.title} key={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="fullName" label="Full Name" required error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={(event) => setField('fullName', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
          </FormField>

          <FormField id="email" label="Email Address" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={(event) => setField('email', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
          </FormField>

          <FormField id="phone" label="Phone Number" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={(event) => setField('phone', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
          </FormField>

          <FormField id="location" label="Current Location" required error={errors.location}>
            <input
              id="location"
              name="location"
              type="text"
              autoComplete="address-level2"
              required
              value={values.location}
              onChange={(event) => setField('location', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.location)}
              aria-describedby={errors.location ? 'location-error' : undefined}
              placeholder="City and state"
            />
          </FormField>

          <FormField id="experience" label="Years of Experience" error={errors.experience}>
            <select
              id="experience"
              name="experience"
              value={values.experience}
              onChange={(event) => setField('experience', event.target.value)}
            >
              <option value="">Select experience</option>
              {experienceOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <FormField id="qualification" label="Highest Qualification" required error={errors.qualification}>
            <input
              id="qualification"
              name="qualification"
              type="text"
              required
              value={values.qualification}
              onChange={(event) => setField('qualification', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.qualification)}
              aria-describedby={errors.qualification ? 'qualification-error' : undefined}
              placeholder="For example, BSc, HND, Diploma, SSCE"
            />
          </FormField>

          <FormField
            id="why"
            label="Why do you want to work with THEC Publishers?"
            required
            error={errors.why}
            className="form-field--full"
          >
            <textarea
              id="why"
              name="why"
              rows={4}
              required
              value={values.why}
              onChange={(event) => setField('why', event.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.why)}
              aria-describedby={errors.why ? 'why-error' : 'why-hint'}
            />
            <p className="form-hint" id="why-hint">
              Tell us what draws you to publishing and what you would bring to the team.
            </p>
          </FormField>

          <FormField
            id="portfolio"
            label="Portfolio/LinkedIn URL"
            error={errors.portfolio}
            hint="A link to relevant work helps us understand your experience."
            className="form-field--full"
          >
            <input
              id="portfolio"
              name="portfolio"
              type="url"
              inputMode="url"
              value={values.portfolio}
              onChange={(event) => setField('portfolio', event.target.value)}
              aria-invalid={Boolean(errors.portfolio)}
              aria-describedby={errors.portfolio ? 'portfolio-error' : 'portfolio-hint'}
              placeholder="https://"
            />
          </FormField>

          <FormField id="start" label="How soon can you start?" error={errors.start}>
            <select
              id="start"
              name="start"
              value={values.start}
              onChange={(event) => setField('start', event.target.value)}
            >
              <option value="">Select availability</option>
              {startOptions.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="coverLetter"
            label="Additional Information / Cover Letter"
            error={errors.coverLetter}
            hint="Optional. You can also attach a cover letter and CV to the email."
            className="form-field--full"
          >
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={5}
              value={values.coverLetter}
              onChange={(event) => setField('coverLetter', event.target.value)}
              aria-describedby="coverLetter-hint"
            />
          </FormField>
        </div>

        <div className="application-form__footer">
          <div className="application-form__note">
            <Icon name="mail" size={18} />
            <p>
              Submitting prepares an email in your own email app. This website does not upload or
              store your application. <strong>Attach your CV before sending.</strong>
            </p>
          </div>
          <Button type="submit" icon="arrow-right">
            Prepare my application
          </Button>
        </div>
      </form>

      {preparedMailto ? (
        <div
          className="form-confirmation"
          id="application-status"
          role="status"
          tabIndex={-1}
          aria-live="polite"
        >
          <span className="form-confirmation__icon">
            <Icon name="check" size={24} />
          </span>
          <div>
            <h3>Your application email is ready — not sent yet.</h3>
            <p>
              We have prepared a draft addressed to{' '}
              <a href={`mailto:${site.contact.recruitmentEmail}`}>{site.contact.recruitmentEmail}</a>
              . Review it in your email app, attach your CV and any portfolio files, then send.
              Your application has <strong>not</strong> been received until you send that email.
            </p>
            <div className="form-confirmation__actions">
              <a href={preparedMailto} className="button button--secondary button--small">
                <Icon name="mail" size={16} />
                Open email draft
              </a>
              <button
                type="button"
                className="button button--ghost button--small"
                onClick={copyApplication}
              >
                <Icon name="copy" size={16} />
                Copy application details
              </button>
              <span className="copy-status" role="status" aria-live="polite">
                {copyState === 'copied' ? 'Copied to clipboard.' : null}
              </span>
            </div>
            {copyState === 'manual' ? (
              <div className="manual-copy">
                <label htmlFor="manual-copy">
                  Copy your application details manually
                </label>
                <textarea
                  id="manual-copy"
                  readOnly
                  rows={8}
                  value={`To: ${site.contact.recruitmentEmail}\nSubject: Job application: ${values.position} — ${values.fullName}\n\n${applicationBody}`}
                />
              </div>
            ) : null}
            <p className="form-confirmation__fallback">
              Email app not opening? Send your application directly to{' '}
              <a href={`mailto:${site.contact.recruitmentEmail}`}>
                {site.contact.recruitmentEmail}
              </a>{' '}
              or WhatsApp{' '}
              <a
                href={`https://wa.me/${site.contact.recruitmentPhoneHref.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.contact.recruitmentPhone}
              </a>
              .
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
