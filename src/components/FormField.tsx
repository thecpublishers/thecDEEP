import type { ReactNode } from 'react';

type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
};

export function FormField({
  id,
  label,
  required = false,
  error,
  hint,
  children,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`form-field${error ? ' form-field--invalid' : ''} ${className}`.trim()}>
      <label htmlFor={id}>
        {label}
        {required ? (
          <>
            <span className="required-mark" aria-hidden="true">
              *
            </span>
            <span className="sr-only"> (required)</span>
          </>
        ) : (
          <span className="optional-mark">Optional</span>
        )}
      </label>
      {hint ? (
        <p className="form-hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p className="form-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
