import React from 'react';
import {
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
  BsYoutube,
} from 'react-icons/bs';
import { useRouteLoaderData } from 'react-router-dom';
import SocialMedia from './SocialMedia';
import ContactInfo from './ContactInfo';
import { FiAtSign } from 'react-icons/fi';
import Heading from './UI/Heading';

const Footer = () => {
  const token = useRouteLoaderData('root') || false;
  return (
    <footer className=" relative  z-40 mx-auto  border-t border-solid border-gray-300 bg-white py-16 ">
      <div
        className="container mx-auto flex flex-col
       gap-8  sm:gap-x-20 md:grid md:grid-cols-3"
      >
        <div className="flex flex-col items-center gap-10 sm:gap-5">
          <Heading title={'Logo'} size="text-4xl" />

          <div className="flex  gap-5">
            <SocialMedia
              icon={BsInstagram}
              label="Profil na Instagramie"
              value="/"
            />
            <SocialMedia icon={BsYoutube} label="Profil na YouTube" value="/" />
            <SocialMedia
              icon={BsFacebook}
              label="Profil na Facebook"
              value="/"
            />
          </div>

          <p className="text-center text-gray-500">
            Copyright &copy; <span>2023</span> All Rights Reserved by Arcshow IT
            Ltd
          </p>
        </div>
        <div className="flex flex-col items-center gap-9 text-lg">
          <Heading title={'Kontakt'} size="text-4xl" />
          <div className="flex flex-col gap-2 text-center text-gray-500">
            <address className="w-52 text-gray-500">
              85 Great Portland Street London, W1W 7LT, UK
            </address>
            <ContactInfo
              icon={BsTelephoneFill}
              label=""
              to="tel:"
              value="203-1291-043"
            />
            <ContactInfo
              icon={FiAtSign}
              label=""
              to="mailto:"
              value="info@arcshow.com"
            />
          </div>
        </div>

        <nav className="flex flex-col items-center text-lg">
          <Heading title={'Konto'} size="text-4xl" />
          <ul className=" flex flex-col items-center gap-3 pt-8 text-gray-500">
            <li>
              <a className="" href={token ? '/profil/publiczny' : '/logowanie'}>
                Stwórz konto
              </a>
            </li>
            <li>
              <a className="" href={token ? '/profil/publiczny' : '/logowanie'}>
                Zaloguj się
              </a>
            </li>
            <li>
              <a className="" href="/">
                Android aplikacja
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
