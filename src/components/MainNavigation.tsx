import { NavLink, Link, Form, useRouteLoaderData } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import React from 'react';
const MainNavigation = () => {
  const token = useRouteLoaderData('root') || false;

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" end className="text-lg text-gray-700">
              Strona główna
            </NavLink>
          </li>
          {/*<li>*/}
          {/*  <NavLink to="/przewodniki" end className="text-lg text-gray-700">*/}
          {/*    Przewodniki*/}
          {/*  </NavLink>*/}
          {/*</li>*/}
        </ul>

        <ul className="flex items-center gap-3">
          {token && (
            <li>
              <Form action="/wyloguj" method="POST">
                <button>Wyloguj się</button>
              </Form>
            </li>
          )}

          <li>
            <Link to={token ? '/profil/publiczny' : '/logowanie'}>
              <BsFillPersonFill className="mr-6 h-8 w-8 text-gray-700 hover:text-primary-500" />
              <span className="sr-only">Profil Na stronie</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
