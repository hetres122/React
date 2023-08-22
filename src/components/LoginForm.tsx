import React, { useState } from 'react';
import { Link, Form, useActionData, useSubmit } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import FormField from '../util/FormField';
import Button from './UI/Button';

export interface FormData {
  username: string;
  password: string;
}
interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

const LoginForm = () => {
  const submit = useSubmit();
  const methods = useForm<FormData>();
  const {
    handleSubmit,
    formState: { errors },
    trigger,
  } = methods;

  const data: ErrorResponse = useActionData() as ErrorResponse;

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data: FormData) => {
    setIsLoading(!isLoading);

    try {
      const authData = {
        username: data.username,
        password: data.password,
      };
      submit(authData, { method: 'POST' });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormProvider {...methods}>
      <div className=" relative mb-16 mt-20 overflow-hidden">
        <div className="mx-auto mb-14 mt-14 flex h-max w-full justify-center rounded-md bg-white px-4 py-8 shadow-md shadow-gray-600 sm:w-min sm:p-8">
          <Form
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className=" w-full sm:w-96"
          >
            <FormField
              name="username"
              label="Username"
              type="email"
              value=""
              rules={{
                required: 'To pole jest wymagane',
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
                  required: 'To pole jest wymagane',
                }}
                errors={errors}
                trigger={trigger}
              />

              {data && data.error && (
                <p className="text-red-700">{data.error}</p>
              )}

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-4 scale-75 text-gray-400 focus:outline-none"
              >
                {showPassword ? 'Ukryj' : 'Pokaż'}
              </button>
            </div>
            <Button type="submit" isLoading={isLoading} text="Zaloguj się" />

            <div className=" mt-3 flex w-full justify-between sm:w-96">
              <Link className="text-sm text-gray-500" to="/rejestracja">
                Rejestracja
              </Link>
              <Link className="text-sm text-gray-500" to="/reset">
                Nie pamiętasz hasła?
              </Link>
            </div>
          </Form>
        </div>
        <div className="absolute inset-6 -z-10 mx-auto mt-16 w-full -translate-y-8 rotate-6 rounded-lg bg-gradient-to-b from-primary-200 to-primary-500 px-56 shadow-md shadow-gray-300 sm:w-3/12"></div>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
