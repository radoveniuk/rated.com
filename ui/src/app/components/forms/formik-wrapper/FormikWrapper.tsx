import React, { useEffect, useState } from 'react';
import {
  Form, Formik, FormikConfig, FormikProps, FormikValues, connect,
} from 'formik';

const SubmitErrorHandler = connect(({ submitCount, isValid, onSubmitError }: any) => {
  const [lastHandled, setLastHandled] = useState(0);
  useEffect(() => {
    if (submitCount > lastHandled) {
      setLastHandled(submitCount);
      if (!isValid) {
        onSubmitError && onSubmitError();
      }
    }
  }, [submitCount, isValid, onSubmitError, lastHandled]);

  return null;
});

type IProps = FormikConfig<FormikValues> & {
  id?: string;
  dataTestId?: string;
  className?: string;

  children?: ((props: FormikProps<FormikValues>) => React.ReactNode) | React.ReactNode;

  onChange?(values: any): void;
  onSubmitError?(): void;
};

const ValuesEffect = ({ values, onChange, children }: any) => {
  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [values, onChange]);

  return children;
};

const FormikWrapper = (props: IProps) => {
  const {
    id, children, className, onSubmitError, onChange, ...rest
  } = props;

  const render = (formik: any) => {
    if (!children) return null;
    if (children instanceof Function) {
      return children(formik);
    }

    return children;
  };

  return (
    <Formik {...rest}>
      {(formik) => (
        <ValuesEffect values={formik.values} onChange={onChange}>
          <Form
            id={id}
            className={className}
          >
            <SubmitErrorHandler
              submitCount={formik.submitCount}
              isValid={formik.isValid}
              onSubmitError={onSubmitError || null}
            />
            {render(formik)}
          </Form>
        </ValuesEffect>
      )}
    </Formik>
  );
};

export default FormikWrapper;
