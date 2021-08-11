import React from 'react';
import { ErrorMessage, useField } from 'formik';

interface IProps {
  component: React.ReactNode;
  htmlFor: string;
  error?: string;
  initialTouched?: boolean;
  className?: string;
}

const FormField = ({
  htmlFor, error, component,
  className, initialTouched = false,
}: IProps) => {
  const [, meta] = useField(htmlFor);

  return (
    <div data-testid="field" className={className}>
      {component}
      {initialTouched
        ? (
          <>
            {meta.error && <p className="g-input-error">{meta.error}</p>}
            {error && <p className="g-input-error">{error}</p>}
          </>
          )
        : (error && <ErrorMessage name={htmlFor} component="p" className="g-input-error" />)}
    </div>
  );
};

FormField.defaultProps = {
  error: true,
  revertColor: false,
};

export default FormField;
