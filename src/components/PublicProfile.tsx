import React from 'react';
import {
  BsInstagram,
  BsYoutube,
  BsFacebook,
  BsTelephoneFill,
} from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { ComponentProfile } from '../interfaces/Interface';

import ContactInfo from './ContactInfo';
import SocialMedia from './SocialMedia';
import Heading from './UI/Heading';
const PublicProfile: React.FC<ComponentProfile> = ({ userData }) => {
  return (
    <>
      <div className=" h-52 w-full bg-gray-100 "></div>

      <div className="relative flex h-48  border-b ">
        <img
          src={userData.urlPicture}
          alt={`Zdjecie profilowe ${userData.formalName} ${userData.formalSurname}`}
          className=" absolute -top-16 left-1 h-44 w-44 rounded-full bg-white object-cover p-1 sm:left-6  sm:h-56  sm:w-56"
        />
        <div>
          <p className="relative left-48 top-5 mb-5 text-2xl text-gray-700 sm:left-64 sm:text-4xl  ">
            {userData.formalName} {userData.formalSurname}
          </p>
          <p className="text-md relative left-48 top-3 mb-5 text-sm text-gray-700 sm:left-64 sm:text-lg ">
            @{userData.publicName}
          </p>
        </div>
      </div>

      <div className=" bg-gray-50 p-2 sm:p-10 ">
        <div className="rounded-md bg-gray-100 shadow-md shadow-gray-300 ">
          <div className="rounded-md p-3 sm:w-full lg:w-2/3">
            {userData.description && <Heading title="O mnie" />}
            {userData.description && (
              <p className="pb-4 tracking-wide">{userData.description}</p>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-300 p-3 ">
            {(userData.phone1 || userData.phone2 || userData.publicEmail) && (
              <Heading title="Dane kontaktowe" />
            )}
            <ContactInfo
              icon={BsTelephoneFill}
              label="Telefon - 1"
              to="tel:"
              width="w-36"
              value={userData.phone1}
            />
            <ContactInfo
              icon={BsTelephoneFill}
              label="Telefon - 2"
              to="tel:"
              width="w-36"
              value={userData.phone2}
            />
            <ContactInfo
              icon={FiAtSign}
              label="Email"
              to="mailto:"
              width="w-36"
              value={userData.publicEmail}
            />

            <div className="flex w-36 flex-col gap-5">
              {(userData.instagram ||
                userData.facebook ||
                userData.youtube) && <Heading title="Social media" />}
              <div className="flex gap-5">
                <SocialMedia
                  icon={BsInstagram}
                  label="Profil na Instagramie"
                  value={userData.instagram}
                />
                <SocialMedia
                  icon={BsYoutube}
                  label="Profil na YouTube"
                  value={userData.youtube}
                />
                <SocialMedia
                  icon={BsFacebook}
                  label="Profil na Facebook"
                  value={userData.facebook}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicProfile;
