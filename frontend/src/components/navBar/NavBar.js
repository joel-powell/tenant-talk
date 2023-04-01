import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import SearchNav from "../searchNav/SearchNav";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const { user, dispatch } = useAuthContext();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex shrink-0 items-center">
                  <svg
                    className="w-10 fill-orange-500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1,0 h18 a1,1 0 0 1 1,1 v6 a1,1 0 0 1 -1,1 h-5 l-8 8 v3 a1,1 0 0 0 1,1 h6 a1,1 0 0 0 1,-1 v-3 l-8 -8 h-5 a1,1 0 0 1 -1,-1 v-6 a1,1 0 0 1 1,-1 z" />
                  </svg>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <Link
                    to="/"
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Home
                  </Link>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <SearchNav />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <div className="shrink-0">
                  <Link
                    to="/review/new"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    Review
                  </Link>
                </div>

                {/* Profile dropdown */}
                {user ? (
                  <Menu as="div" className="relative ml-4 shrink-0">
                    <div>
                      <Menu.Button className="-m-1.5 flex items-center p-1.5">
                        <span className="sr-only">Open user menu</span>
                        <span className="hidden lg:flex lg:items-center">
                          <span
                            className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                            aria-hidden="true"
                          >
                            {user.firstName}
                          </span>
                          <ChevronDownIcon
                            className="ml-0 h-5 w-5 text-gray-600"
                            aria-hidden="true"
                          />
                        </span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={() => dispatch({ type: "logout" })}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Log out
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Link
                    to="/login"
                    className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <Link
                to="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Link>
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user && user.firstName}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user && user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Log out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;