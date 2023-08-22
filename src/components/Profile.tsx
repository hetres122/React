import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const checkWindowWidth = () => {
    const isWide = window.innerWidth >= 768;
    setIsSidebarOpen(isWide);
  };

  useEffect(() => {
    checkWindowWidth();

    const handleResize = () => {
      checkWindowWidth();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={toggleSidebar}
        className="ml-3 mt-4 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        onClick={toggleSidebar}
        id="default-sidebar"
        className={`fixed left-0 top-14 z-40 h-full w-72 ${
          isSidebarOpen ? '-translate-x-0' : '-translate-x-full'
        } transition-transform md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-gray-50  dark:bg-gray-800">
          <div className="h-full rounded-l-md bg-primary-600 ">
            <ul className="mb-10 flex flex-col justify-center px-5 text-lg transition-colors ">
              <li className="hover:text-whit-900 border-t px-1 py-5 tracking-wide text-white">
                <Link to="/profil/publiczny">Wyswietl profil publiczny </Link>
              </li>
              <li className="hover:text-whit-900 border-t px-1 py-5 tracking-wide text-white">
                <Link to="/profil/ustawienia">Ustawienia Profilu </Link>
              </li>
              <li className="hover:text-whit-900 border-t px-1 py-5 tracking-wide text-white">
                <Link to="/profil/przewodniki">Przewodniki </Link>
              </li>
              <li className="hover:text-whit-900 border-y px-1 py-5 tracking-wide text-white">
                <Link to="/profil/prywatnosc">Prywatność konta </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-60 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Profile;
