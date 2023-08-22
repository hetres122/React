import React from 'react';
import { Form, useNavigation } from 'react-router-dom';
import Card from './UI/Card';
import Button from './UI/Button';
import Heading from './UI/Heading';

const ProfileEditImage = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className=" px-8 ">
        <Card>
          <div>
            <Heading title="Zmień zdjęcie profilowe" size="text-2xl" />

            <p className="tracking-wider">
              Dodaj zdjęcie profilowe, by lepiej pokazać się innym
            </p>
          </div>
        </Card>
      </div>

      <Form method="POST" encType="multipart/form-data" className="w-full p-8">
        <label
          htmlFor="example2"
          className="text-md mb-2 block font-medium text-gray-700"
        >
          Przesyłanie pliku
        </label>
        <input
          id="example2"
          type="file"
          className="b block w-full rounded-xl   border-2 border-gray-300 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-500 file:px-4 file:py-4 file:text-sm file:font-semibold file:text-white file:transition-colors hover:cursor-pointer file:hover:cursor-pointer hover:file:bg-primary-700 focus:outline-none  disabled:opacity-60"
          name="file"
          required
        />

        <div className="ml-auto w-24">
          <Button
            type="submit"
            isLoading={navigation.state === 'submitting'}
            text="Zapisz"
          />
        </div>
      </Form>
    </>
  );
};
export default ProfileEditImage;
