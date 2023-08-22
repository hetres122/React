import React from 'react';

import { Form, useNavigate, useNavigation } from 'react-router-dom';
import FormField from '../util/FormField';
import Button from './UI/Button';
import { FormProvider, useForm } from 'react-hook-form';

import { ComponentDetails } from '../interfaces/Interface';

const ProductEditForm: React.FC<ComponentDetails> = ({
  description,
  title,
  position,
}) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  const methods = useForm<FormData>();
  const {
    formState: { errors },
    trigger,
  } = methods;

  const cancleHandler = () => {
    navigate('..');
  };

  return (
    <FormProvider {...methods}>
      <Form method="PUT" className="w-full">
        <div className="flex w-full gap-6">
          <div className="w-full">
            <label className="pl-2.5 text-gray-700">Lat</label>
            <input
              value={position?.[0].toFixed(4)}
              type="text"
              name="coordinateLAT"
              className="mb-4 block h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              readOnly
            />
          </div>
          <div className="w-full">
            <label className="pl-2 text-gray-700">Lon</label>
            <input
              value={position?.[1].toFixed(4)}
              name="coordinateLONG"
              className="mb-4 block h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              readOnly
            />
          </div>
        </div>
        <FormField
          name="name"
          label="Tytuł"
          type="text"
          value={title ? title : ''}
          rules={{
            required: 'To pole jest wymagane',
          }}
          errors={errors}
          trigger={trigger}
        />
        <label
          htmlFor="message"
          className="block  pb-5 text-lg text-gray-700 dark:text-white"
        >
          {' '}
          Opis{' '}
        </label>
        <textarea
          id="message"
          maxLength={700}
          defaultValue={description}
          className="mb-4 block h-36 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Edytuj tytuł punktu"
          name="description"
        ></textarea>
        <div className="flex gap-6 ">
          <button
            className="mt-4 w-full rounded-lg bg-primary-500 px-4 py-2 text-white transition-colors hover:bg-primary-700"
            onClick={cancleHandler}
          >
            Wstecz{' '}
          </button>
          <Button type="submit" isLoading={isSubmitting} text="Zapisz zmiany" />
        </div>
      </Form>
    </FormProvider>
  );
};

export default ProductEditForm;
