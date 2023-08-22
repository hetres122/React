import Header from './UI/Header';
import { FormProvider, useForm } from 'react-hook-form';
import { FormData } from './LoginForm';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import FormField from '../util/FormField';
import Button from './UI/Button';
import { ResponseReset } from '../interfaces/Interface';
import ProfilContainer from './UI/ProfilContainer';

const ProfileAccountSecurity = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  const methods = useForm<FormData>();
  const {
    formState: { errors },
    trigger,
  } = methods;

  const data: ResponseReset = useActionData() as ResponseReset;
  const textColorClass = data?.code === 1 ? 'text-red-700' : 'text-black';

  return (
    <ProfilContainer>
      <Header name="Prywatność Konta" />
      <div className="mx-auto   bg-white pt-16 ">
        <FormProvider {...methods}>
          <div className=" my-32 overflow-hidden">
            <div className="mx-auto mb-14  flex min-h-max  justify-center rounded-md px-4 py-8  ">
              <Form method="POST" className="w-80 sm:w-96">
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
                  isLoading={isSubmitting}
                  text="ZMIEŃ HASŁO"
                />
              </Form>
            </div>
          </div>
        </FormProvider>
      </div>
    </ProfilContainer>
  );
};

export default ProfileAccountSecurity;
