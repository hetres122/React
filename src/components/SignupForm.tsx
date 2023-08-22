import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form, Link, useNavigate } from 'react-router-dom';
import FormField from '../util/FormField';
import Button from './UI/Button';

export interface FormValues {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignupForm = () => {
  const methods = useForm<FormValues>();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = methods;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const password = watch('password');
  const required: string = 'To pole jest wymagane';
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      navigate('/');
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormProvider {...methods}>
      <div className="relative overflow-hidden">
        <div className=" mx-auto mb-14 mt-14 flex h-max w-min justify-center rounded-md bg-white p-8 shadow-md shadow-gray-600">
          <Form onSubmit={handleSubmit(onSubmit)} className="w-96">
            <FormField
              name="firstName"
              label="Imię"
              type="text"
              value=""
              rules={{
                required: required,
                maxLength: {
                  value: 80,
                  message: 'Maksymalna długość to 80 znaków',
                },
              }}
              errors={errors}
              trigger={trigger}
            />

            <FormField
              name="lastName"
              label="Nazwisko"
              type="text"
              value=""
              rules={{
                required: required,
                maxLength: {
                  value: 80,
                  message: 'Maksymalna długość to 80 znaków',
                },
              }}
              errors={errors}
              trigger={trigger}
            />

            <FormField
              name="email"
              label="Email"
              type="email"
              value=""
              rules={{
                required: required,
                pattern: {
                  value: /^\S+@\S+$/,
                  message: 'Nieprawidłowy format adresu email',
                },
              }}
              errors={errors}
              trigger={trigger}
            />

            <div className="relative">
              <FormField
                name="password"
                label="Hasło"
                value=""
                type={showPassword ? 'text' : 'password'}
                rules={{
                  required: required,
                  minLength: {
                    value: 6,
                    message: 'Hasło musi mieć co najmniej 6 znaków',
                  },
                }}
                errors={errors}
                trigger={trigger}
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-4 scale-75 text-gray-400 focus:outline-none"
              >
                {showPassword ? 'Ukryj' : 'Pokaż'}
              </button>
            </div>
            <div className="relative">
              <FormField
                name="confirmPassword"
                label="Potwierdź hasło"
                value=""
                type={showConfirmPassword ? 'text' : 'password'}
                rules={{
                  required: required,
                  validate: (value: string) =>
                    value === password || 'Hasła nie są identyczne',
                }}
                errors={errors}
                trigger={trigger}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-4 scale-75 text-gray-400 focus:outline-none"
              >
                {showConfirmPassword ? 'Ukryj' : 'Pokaż'}
              </button>
            </div>

            <Button type="submit" isLoading={isLoading} text="Załóż konto" />

            <div className="mt-3 flex items-center">
              <p className="pr-2 text-sm text-gray-600">Masz już konto? </p>{' '}
              <Link className="text-sm text-primary-800" to="/logowanie">
                Zaloguj się
              </Link>
            </div>
          </Form>
        </div>
        <div className="absolute inset-6 -z-10 mx-auto mt-16 w-3/12 -translate-y-8 rotate-6 rounded-lg bg-gradient-to-b from-primary-200 to-primary-500 px-56 shadow-md shadow-gray-300"></div>
      </div>
    </FormProvider>
  );
};

export default SignupForm;
