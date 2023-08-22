import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import Footer from '../components/Footer';

interface Data {
  message: string;
}
interface ErrorType {
  data: Data;
  status: number;
}

const ErrorPage = () => {
  const error: ErrorType = useRouteError() as ErrorType;
  let title = 'Wystąpił bład';
  let message = 'Coś poszło nie tak';
  if (error.status === 401) {
    title = error.data.message;
  }

  if (error.status === 404) {
    title = 'Nie znaleziono strony';
  }

  return (
    <>
      <MainNavigation />
      <div className="container mx-auto flex h-100 flex-col items-center justify-center gap-4 p-8 ">
        <p className=" text-2xl sm:text-4xl">{title}</p>
        <div className="flex flex-col gap-4">
          <p className="text-center text-lg sm:text-2xl">{message}</p>
          <Link
            to="/"
            className="rounded-md bg-primary-500 p-3 text-white transition-colors hover:bg-primary-700"
          >
            Powrót do strony głownej
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
