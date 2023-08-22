import { Form, useNavigation } from 'react-router-dom';

import Card from './UI/Card';
import Input from '../util/input';
import Button from './UI/Button';
import { ComponentProfile } from '../interfaces/Interface';

import React from 'react';
import Heading from './UI/Heading';

const ProfileSettings: React.FC<ComponentProfile> = ({ userData }) => {
  const navigation = useNavigation();
  return (
    <>
      <Form method="PUT" className="p-8">
        <Card>
          <div>
            <Heading title="Dane profilu" size="text-2xl" />

            <p className="tracking-wider">
              Dodaj dane na profil, aby lepiej się przedstawić
            </p>
          </div>
        </Card>

        <Card>
          <Input
            name="publicName"
            label="Nazwa przewodnika"
            type="text"
            value={userData.publicName}
          />
        </Card>

        <Card>
          <label htmlFor="message" className=" text-lg text-gray-700">
            Opis
          </label>
          <div className="w-full">
            <textarea
              id="message"
              className="h-40 w-full rounded-md border-2 border-gray-300 bg-gray-50 p-2.5 tracking-wider text-gray-900 focus:border-2 focus:border-blue-700 focus:outline-none "
              placeholder="Dodaj opis profilu"
              name="description"
              defaultValue={userData.description}
            ></textarea>
          </div>
        </Card>

        <Card>
          <Input
            name="instagram"
            label="Instagram"
            type="text"
            value={userData.instagram}
          />
        </Card>

        <Card>
          <Input
            name="youtube"
            label="YouTube"
            type="text"
            value={userData.youtube}
          />
        </Card>
        <Card>
          <Input
            name="facebook"
            label="Facebook"
            type="text"
            value={userData.facebook}
          />
        </Card>

        <Card>
          <div>
            <Heading title="Dane kontaktowe" size="text-2xl" />
            <p className="tracking-wider">
              Dodaj swoje dane kontaktowe, by móc nawiązywać kontakty
            </p>
          </div>
        </Card>
        <Card>
          <Input
            name="formalName"
            label="Imię"
            type="text"
            value={userData.formalName}
          />
        </Card>
        <Card>
          <Input
            name="formalSurname"
            label="Naziwko"
            type="text"
            value={userData.formalSurname}
          />
        </Card>
        <Card>
          <Input
            name="publicEmail"
            label="Publiczny Email"
            type="text"
            value={userData.publicEmail}
          />
        </Card>
        <Card>
          <Input
            name="phone1"
            label="Numer telefonu - 1"
            type="tel"
            value={userData.phone1}
          />
        </Card>
        <Card>
          <Input
            name="phone2"
            label="Numer telefonu - 2"
            type="tel"
            value={userData.phone2}
          />
        </Card>
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
export default ProfileSettings;
