import { FormProvider, useForm } from 'react-hook-form';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import FormField from '../util/FormField';
import Button from './UI/Button';
import { FormData } from './LoginForm';
import { ResponseReset } from '../interfaces/Interface';

const ResetPassword = () => {
  const methods = useForm<FormData>();
  const {
    formState: { errors },
    trigger,
  } = methods;

  const data: ResponseReset = useActionData() as ResponseReset;
  const navigation = useNavigation();
  const textColorClass = data?.code === 1 ? 'text-red-700' : 'text-gray-700';
  return (
    <FormProvider {...methods}>
      <div className="relative mb-16 mt-20 overflow-hidden">
        <div className="mx-auto mb-14 mt-14 flex h-max w-full justify-center rounded-md bg-white px-4 py-8 shadow-md shadow-gray-600 sm:w-min sm:p-8">
          <Form method="POST" className="w-96">
            <h3 className="pb-5 text-center text-2xl text-gray-700">
              Zmiana Hasła
            </h3>

            <FormField
              name="username"
              label="Podaj zarejestrowany email"
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
            <p className={textColorClass}>{data?.status}</p>
            <Button
              type="submit"
              isLoading={navigation.state === 'submitting'}
              text="ZMIEŃ HASŁO"
            />
          </Form>
        </div>
        <div className="absolute inset-6 -z-10 mx-auto mt-16 w-full -translate-y-8 rotate-6 rounded-lg bg-gradient-to-b from-primary-200 to-primary-500 px-56 shadow-md shadow-gray-300 sm:w-3/12"></div>
      </div>
    </FormProvider>
  );
};

export default ResetPassword;
